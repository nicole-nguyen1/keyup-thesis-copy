import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Reddit extends React.Component {
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
          <img src='https://s3.amazonaws.com/key-up-assets/Reddit-logo-true.png' style={this.props.styles.topIcon} />
          <Typography variant='caption'>Reddit</Typography>
        </Grid>
      </div>
    )
  }
}

export default Reddit;