import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
      copied: false,
      snackBarOpen: false
    }
  }

  handleClick = () => {
    this.setState({ snackBarOpen: true });
  };

  handleClose = () => {
    this.setState({ snackBarOpen: false });
  };

  render() {
    return (
      <div style={this.props.styles.row}>
        <Grid item
          role="button">
          <img src='https://s3.amazonaws.com/key-up-assets/Email-Icon.png' style={this.props.styles.bottomIcon} />
          <Typography variant='caption'>Email</Typography>
        </Grid>
      </div>
    )
  }
}

export default Email;