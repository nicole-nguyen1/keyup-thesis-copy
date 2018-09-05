import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import Filter from './Filter.jsx';
import Sort from './Sort.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../../store/index';
import { findServices } from '../../actions/action';
import { getServicesQuery } from '../graphql/graphql';
import { Button, Dialog, DialogContent, DialogTitle, Grid, FormGroup, RadioGroup, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  headerStyle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },

  groupStyle: {
    fontSize: '12px',
    fontWeight: 'bold'
  },

  formStyle: {
    width: '320px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '500px'
    }
  },

  sectionStyle: {
    marginBottom: '30px'
  },

  listItem: {
    display: 'flex',
    flexDirection: 'column'
  },

  form: {
    top: '56px'
  },

  backdrop: {
    backgroundColor: 'transparent',
    top: '56px'
  },

  paper: {
    backgroundColor: 'white'
  },

  button: {
    backgroundColor: '#4e74ff',
    borderRadius: 0
  }
});

class FilterAndSortForm extends React.Component {
  constructor(props) {
    super(props);
    this.sortOptions = [
      'Affordability',
      'Shortest Training'
    ];
    this.filterOptions = [
      'Get paid to learn',
      'Can apply for federal loans'
    ];
    this.state = {
      sortSelection: 'Affordability',
      paidToLearn: false,
      freeTraining: false
    };
    this.fetch = createApolloFetch({ uri: '../graphql' }).bind(this);
  }

  handlePaidClick = () => {
    this.setState({
      paidToLearn: !this.state.paidToLearn
    });
  }

  handleFreeClick = () => {
    this.setState({
      freeTraining: !this.state.freeTraining
    });
  }

  handleFormSubmission = () => {
    this.fetch({
      query: getServicesQuery(this.props.careerID)
    }).then(res => {
      if (this.state.paidToLearn && !this.state.freeTraining) {
        let temp = {trainings: this.filterServicesByGetPaidToLearn(res.data.trainings)};
        let temp2 = this.checkSortState(temp.trainings);
        let temp3 = {trainings: temp2};
        store.dispatch(findServices(temp3));
      } else if (this.state.freeTraining && !this.state.paidToLearn) {
        let temp = {trainings: this.filterServicesByFederalLoans(res.data.trainings)};
        let temp2 = this.checkSortState(temp.trainings);
        let temp3 = {trainings: temp2};
        store.dispatch(findServices(temp3));
      } else if (this.state.freeTraining && this.state.paidToLearn) {
        let temp = {trainings: this.filterServicesByPayAndLoans(res.data.trainings)};
        let temp2 = this.checkSortState(temp.trainings);
        let temp3 = {trainings: temp2};
        store.dispatch(findServices(temp3));
      } else {
        let temp = {trainings: res.data.trainings};
        let temp2 = this.checkSortState(temp.trainings);
        let temp3 = {trainings: temp2};
        store.dispatch(findServices(temp3));
      } 
    });
  }

  setSort = (e) => {
    this.setState({
      sortSelection: e.target.value
    });
  }

  filterServicesByGetPaidToLearn = (services) => {
    const filteredPaidServices = [];
    if (services[0].id) {
      services.forEach(service => {
        if (service.paid_to_learn) {
          filteredPaidServices.push(service);
        }
      });
      return filteredPaidServices;
    }
  }

  filterServicesByFederalLoans = (services) => {
    const filteredLoanServices = [];
    if (services[0].id) {
      services.forEach(service => {
        if (service.federal_student_aid) {
          filteredLoanServices.push(service);
        }
      });
      return filteredLoanServices;
    }
  }
    
  filterServicesByPayAndLoans = (services) => {
    const filteredServices = [];
    if (services[0].id) {
      services.forEach(service => {
        if (service.federal_student_aid && service.paid_to_learn) {
          filteredServices.push(service);
        }
      });
      return filteredServices;
    }
  }

  checkSortState = (services) => {
    if (this.state.sortSelection === 'Affordability') {
      return this.sortByAffordability(services);
    } else if (this.state.sortSelection === 'Shortest Training') {
      return this.sortByShortestTraining(services);
    } else {
      return this.sortByAffordability(services);
    }
  }

  sortByAffordability = (services) => {
    if (services.length < 1) {
      return [];
    }
    const paid = [];
    const free = [];
    const sortedServices = [];
    const unsortedRangeServices = [];
    const unsortedNumberServices = [];
    if (services[0].id) {
      services.forEach(service => {
        if (service.card_tuition.slice(0, 4).toLowerCase() === 'paid') {
          paid.push(service);
        } else if (service.card_tuition.slice(0, 4).toLowerCase() === 'free' && service.card_tuition.length === 4) {
          free.push(service);
        } else if (service.card_tuition.slice(0, 4).toLowerCase() === 'free' && service.card_tuition.length > 4) {
          let range = Number(service.card_tuition.match(/\d/g).join(''));
          unsortedRangeServices.push([service, range]);
        } else {
          let num = Number(service.card_tuition.match(/\d/g).join(''));
          unsortedNumberServices.push([service, num]);
        }
      });
    }
    paid.forEach(service => {
      sortedServices.push(service);
    });
    free.forEach(service => {
      sortedServices.push(service);
    });
    unsortedRangeServices.sort(this.sortNumbers);
    unsortedRangeServices.forEach(service => {
      sortedServices.push(service[0]);
    });
    unsortedNumberServices.sort(this.sortNumbers);
    unsortedNumberServices.forEach(service => {
      sortedServices.push(service[0]);
    });
    return sortedServices;
  }

  sortByShortestTraining = (services) => {
    if (services.length < 1) {
      return [];
    }
    const sortedServices = [];
    const unsorted = [];
    if (services[0].id) {
      services.forEach(service => {
        if (service.card_length.includes('week')) {
          let num = Number(service.card_length.match(/\d/g).join(''));
          unsorted.push([service, num]);
        } else if (service.card_length.includes('month')) {
          let num = Number(service.card_length.match(/\d/g).join('')) * 4;
          unsorted.push([service, num]);
        } else if (service.card_length.includes('semester')) {
          let num = Number(service.card_length.match(/\d/g).join('')) * 16;
          unsorted.push([service, num]);
        } else if (service.card_length.includes('year')) {
          let num = Number(service.card_length.match(/\d/g).join('')) * 52;
          unsorted.push([service, num]);
        } 
      });
    }
    unsorted.sort(this.sortNumbers);
    unsorted.forEach(service => {
      sortedServices.push(service[0]);
    });
    return sortedServices;
  }

  sortNumbers = (a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onClose={this.handleClose}
        className={classes.form}
        BackdropProps={{
          classes: {
            root: classes.backdrop
          }
        }}
        PaperProps={{
          classes: {
            root: classes.paper
          }
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <div className={classes.formStyle}>
          <DialogTitle id="responsive-dialog-title" className={classes.headerStyle}>
            {'Filter and Sort Training'}
          </DialogTitle>
          <DialogContent>
            <FormGroup>
              <div className={classes.sectionStyle}>
                <div className={classes.listItem}>
                  {this.filterOptions.map((label, index) => {
                    return (<Filter
                      key={index}
                      label={label}
                      handlePaidClick={this.handlePaidClick}
                      handleFreeClick={this.handleFreeClick}
                    />
                    );
                  })}
                </div>
              </div>
              <div className={classes.sectionStyle}>
                <Typography className={classes.groupStyle}>
                  SORT BY
                </Typography>
                <RadioGroup name="sort">
                  <div className={classes.listItem}>
                    {this.sortOptions.map((label, index) => {
                      return (<Sort
                        key={index}
                        label={label}
                        select={this.setSort}
                        sortSelection={this.state.sortSelection}
                      />);
                    })}
                  </div>
                </RadioGroup>
              </div>
              <Grid container>
                <Grid item xs={7}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                      this.props.hideFilter();
                      this.handleFormSubmission();
                    }}
                  >See Training Results</Button>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    onClick={this.props.hideFilter}
                    style={{ marginLeft: '20px' }}
                  >CANCEL</Button>
                </Grid>
              </Grid>
            </FormGroup>
          </DialogContent>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.services.services
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findServices }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FilterAndSortForm));