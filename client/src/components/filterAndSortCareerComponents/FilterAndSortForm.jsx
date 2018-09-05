import React from 'react';
import Filter from './Filter.jsx';
import Sort from './Sort.jsx';
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, FormGroup, RadioGroup, Typography } from '@material-ui/core';
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

  divider: {
    backgroundColor: 'black',
    width: '95%',
    margin: '0 auto'
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
      'Highest salary',
      'Shortest training length',
      'Most job openings'
    ];
    this.filterOptions = {};
    this.paidToLearn = false;
    this.freeTraining = false;
    this.state = {
      sortSelection: 'Highest salary'
    };
  }

  setFilter = (e) => {
    if (this.filterOptions[e.target.value] === 0) {
      delete this.filterOptions[e.target.value];
    } else {
      this.filterOptions[e.target.value] = 0;
    }
  }

  setFixedFilter = (e) => {
    if (e.target.value === '-1') {
      this.paidToLearn = !this.paidToLearn;
    }
    if (e.target.value === '-2') {
      this.freeTraining = !this.freeTraining;
    }
  }

  setSort = (e) => {
    this.setState({
      sortSelection: e.target.value
    });
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
            {'Filter and Sort Careers'}
          </DialogTitle>
          <DialogContent>
            <FormGroup>
              <Typography gutterBottom className={classes.groupStyle}>
                FILTER
              </Typography>
              <div className={classes.sectionStyle}>
                <div className={classes.listItem}>
                  {this.props.industries.map((industry) => {
                    return (
                      <Filter
                        key={industry.id}
                        label={industry.name}
                        id={industry.id}
                        setFilter={this.setFilter}
                      />);
                  })}
                </div>
                <Divider className={classes.divider} />
                <div className={classes.listItem}>
                  <Filter
                    label="Get paid to learn"
                    id="-1"
                    setFilter={this.setFixedFilter}
                  />
                  <Filter
                    label="Free training services"
                    id="-2"
                    setFilter={this.setFixedFilter}
                  />
                </div>
              </div>
              <div className={classes.sectionStyle}>
                <Typography gutterBottom className={classes.groupStyle}>
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
                      this.props.filterCareers({
                        args: Object.keys(this.filterOptions),
                        paidToLearn: this.paidToLearn,
                        freeTraining: this.freeTraining
                      }, this.state.sortSelection);
                      this.filterOptions = {};
                    }}
                  >See Career Results</Button>
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

export default withStyles(styles)(FilterAndSortForm);