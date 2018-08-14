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
        <Filter />
        <Filter />
        <Filter />
        <Divider />
        <FormControlLabel control={
          <Checkbox color = "default"/>
        } label="Get paid to learn" />
        <FormControlLabel control={
          <Checkbox color = "default"/>
        } label="Free training services" />
        <Typography className={classes.groupStyle}>
          SORT BY
        </Typography>
        <RadioGroup name="sort">
          <Sort />
          <Sort />
          <Sort />
        </RadioGroup>
        <Button variant="contained" color="primary">See Career Results</Button>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(FilterAndSort);