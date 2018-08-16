import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Filter from './Filter.jsx';
import Sort from './Sort.jsx';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  headerStyle: {
    textAlign: 'center'
  },
  groupStyle: {
    fontSize: '12px'
  },
  formStyle: {
    padding: '10px',
    maxWidth: '400px'
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
    console.log(e.target.value);
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
    }, ()=>console.log(this.state));
  }

  render() {
    const { classes } = this.props;
    return (
      <FormGroup className={classes.formStyle}>
        <Typography variant="headline" className={classes.headerStyle}>
          Filter and Sort Careers
          <br />
        </Typography>
        <Typography className={classes.groupStyle}>
          FILTER
        </Typography>
        {this.props.industries.map((industry)=>{
          return (
            <Filter 
              key={industry.id} 
              label={industry.name}
              id={industry.id}
              setFilter={this.setFilter}
            />);
        })}
        <Divider />
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
        <Typography className={classes.groupStyle}>
          SORT BY
        </Typography>
        <RadioGroup name="sort">
          {this.sortOptions.map((label, index)=>{
            return (<Sort 
              key={index} 
              label={label}
              select={this.setSort}
              sortSelection={this.state.sortSelection}
            />);
          })}
        </RadioGroup>
        <Grid container>
          <Grid item xs={6}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={()=>{
                this.props.hideFilter();
                this.props.filterCareers({
                  args: Object.keys(this.filterOptions),
                  paidToLearn: this.paidToLearn,
                  freeTraining: this.freeTraining
                });
              }}
            >See Career Results</Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={this.props.hideFilter}
            >CANCEL</Button>
          </Grid>
        </Grid>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(FilterAndSortForm);