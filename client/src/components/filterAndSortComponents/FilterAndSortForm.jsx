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
          return (<Filter key={industry.id} label={industry.name}/>);
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
        <Grid container>
          <Grid item xs={6}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={this.props.hideFilter}
            >See Career Results</Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={this.props.hideFilter}>CANCEL</Button>
          </Grid>
        </Grid>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(FilterAndSortForm);