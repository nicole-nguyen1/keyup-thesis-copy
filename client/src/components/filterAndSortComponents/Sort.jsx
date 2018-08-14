import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const styles = theme => ({
  headerStyle: {
    textAlign: 'center'
  }
});

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControlLabel control={
        <Radio color = "default"/>
      } label="Highest salary" />
    );
  }
}

export default withStyles(styles)(Sort);