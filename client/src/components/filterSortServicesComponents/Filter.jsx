import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

  checkLabel = (e) => {
    if (this.props.label === "Get paid to learn") {
      this.props.handlePaidClick(e);
    } else {
      this.props.handleFreeClick(e);
    }
  }
  

  render() {
    const { classes } = this.props;
    return (
      <FormControlLabel 
        control={
          <Checkbox 
            color = "default"
            onChange={(e) => this.checkLabel(e)}
          />
        } label={this.props.label}/>
    );
  }
}

export default withStyles(styles)(Filter);