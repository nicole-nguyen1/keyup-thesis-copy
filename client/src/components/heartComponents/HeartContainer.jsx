import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    borderRadius: 0,
    padding: '5px'
  }
});
class CareerProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div>
      </div>
    );
  }
}

export default withStyles(styles)(CareerProfile);