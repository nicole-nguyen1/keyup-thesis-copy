import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const styles = theme => ({
  formStyle: {
    padding: '10px',
    maxWidth: '400px'
  }
});

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControlLabel 
        control={
          <Checkbox 
            color = "default"
            onChange ={this.props.setFilter}
            value ={this.props.id}
          />
        } label={this.props.label} />
    );
  }
}

export default withStyles(styles)(Filter);