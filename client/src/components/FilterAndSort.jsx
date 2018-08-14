import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Filter from './filterAndSortComponents/Filter.jsx';
import Sort from './filterAndSortComponents/Sort.jsx';

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

//need to refactor this to render a list tech industries


class FilterAndSort extends React.Component {
  constructor(props) {
    super(props);
    this.sortOptions = [
      'Highest salary',
      'Shortest training length',
      'Most job openings'
    ];
    this.techIndustries = [
      'Health Care Industry',
      'Tech Industry',
      'Skilled Trade Industry'
    ];
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
        {this.techIndustries.map((label, index)=>{
          return (<Filter key={index} label={label}/>);
        })}
        <Divider />
        <Filter label="Get paid to learn" />
        <Filter label="Free training services" />
        <Typography className={classes.groupStyle}>
          SORT BY
        </Typography>
        <RadioGroup name="sort">
          {this.sortOptions.map((label, index)=>{
            return (<Sort key={index} label={label}/>);
          })}
        </RadioGroup>
        <Button variant="contained" color="primary">See Career Results</Button>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(FilterAndSort);