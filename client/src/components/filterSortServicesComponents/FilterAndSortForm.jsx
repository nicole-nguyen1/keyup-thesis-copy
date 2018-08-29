import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import Filter from './Filter.jsx';
import Sort from './Sort.jsx';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../../store/index';
import { findServices } from '../../actions/action';
import { getServicesQuery } from '../graphql/graphql';

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
    maxWidth: '400px'
  },

  sectionStyle: {
    display: 'inline-grid',
    marginBottom: '30px'
  },

  form: {
    top: '56px'
  },

  backdrop: {
    backgroundColor: "transparent",
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
    })
  }

  handleFreeClick = () => {
    this.setState({
      freeTraining: !this.state.freeTraining
    })
  }

  handleFormSubmission = () => {
    this.fetch({
      query: getServicesQuery(this.props.careerID)
    }).then(res => {
    if (this.state.paidToLearn && !this.state.freeTraining) {
      let temp = {trainings: this.filterServicesByGetPaidToLearn(res.data.trainings), career: res.data.career.name}
      let temp2 = this.checkSortState(temp.trainings);
      let temp3 = {trainings: temp2, career: res.data.career.name}
      store.dispatch(findServices(temp3))
    } else if (this.state.freeTraining && !this.state.paidToLearn) {
      let temp = {trainings: this.filterServicesByFederalLoans(res.data.trainings), career: res.data.career.name}
      let temp2 = this.checkSortState(temp.trainings);
      let temp3 = {trainings: temp2, career: res.data.career.name}
      store.dispatch(findServices(temp3));
    } else if (this.state.freeTraining && this.state.paidToLearn) {
      let temp = {trainings: this.filterServicesByPayAndLoans(res.data.trainings), career: res.data.career.name}
      let temp2 = this.checkSortState(temp.trainings);
      let temp3 = {trainings: temp2, career: res.data.career.name}
      store.dispatch(findServices(temp3))
    } else {
      let temp = {trainings: res.data.trainings, career: res.data.career.name}
      let temp2 = this.checkSortState(temp.trainings);
      let temp3 = {trainings: temp2, career: res.data.career.name}
      store.dispatch(findServices(temp3))
    }})
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
      })
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
      })
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
      })
      return filteredServices;
    }
  }

  checkSortState = (services) => {
    if (this.state.sortSelection === 'Affordability') {
      return this.sortByAffordability(services)
    } else if (this.state.sortSelection === 'Shortest Training') {
      return this.sortByShortestTraining(services)
    } else {
      return this.sortByAffordability(services)
    }
  }

  sortByAffordability = (services) => {
    if (services.length < 1) {
      return [];
    }
    const sortedServices = [];
    const unsortedRangeServices = [];
    const unsortedNumberServices = [];
    if (services[0].id) {
      services.forEach(service => {
        if (service.card_tuition.slice(0,4).toLowerCase() === 'paid') {
          sortedServices.push(service)
        } else if (service.card_tuition.slice(0,4).toLowerCase() === 'free' && service.card_tuition.length === 4) {
          sortedServices.push(service)
        } else if (service.card_tuition.slice(0,4).toLowerCase() === 'free' && service.card_tuition.length > 4) {
          let range = Number(service.card_tuition.match(/\d/g).join(''));
          unsortedRangeServices.push([service, range]);
        } else {
          let num = Number(service.card_tuition.match(/\d/g).join(''));
          unsortedNumberServices.push([service, num]);
        }
      })
    }
    unsortedRangeServices.sort(this.sortNumbers);
    unsortedRangeServices.forEach(service => {
      sortedServices.push(service[0]);
    })
    unsortedNumberServices.sort(this.sortNumbers);
    unsortedNumberServices.forEach(service => {
      sortedServices.push(service[0]);
    })
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
      })
    }
    unsorted.sort(this.sortNumbers);
    unsorted.forEach(service => {
      sortedServices.push(service[0]);
    })
    return sortedServices;
  }

  sortNumbers = (a,b) => {
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
        <DialogTitle id="responsive-dialog-title" className={classes.headerStyle}>
          {"Filter and Sort Training"}
        </DialogTitle>
        <DialogContent>
          <FormGroup className={classes.formStyle}>
            <div className={classes.sectionStyle}>
              {this.filterOptions.map((label, index) => {
                return (<Filter
                  key={index}
                  label={label}
                  handlePaidClick={this.handlePaidClick}
                  handleFreeClick={this.handleFreeClick}
                />
                )
              })}
            </div>
            <div className={classes.sectionStyle}>
              <Typography className={classes.groupStyle}>
                SORT BY
              </Typography>
              <RadioGroup name="sort">
                {this.sortOptions.map((label, index) => {
                  return (<Sort
                    key={index}
                    label={label}
                    select={this.setSort}
                    sortSelection={this.state.sortSelection}
                  />);
                })}
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
                    this.handleFormSubmission()
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