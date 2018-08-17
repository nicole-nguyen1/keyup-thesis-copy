import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Twitter extends React.Component {
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
    const url = encodeURIComponent(this.props.url);
    const text = encodeURIComponent(`I'm using KeyUp to explore careers, training services, and support services! Check out this link: `)
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

    return (
      <div style={this.props.styles.row}>
        <a href={twitterUrl} style={{ textDecoration: 'none' }}>
          <Grid item
            role="button">
            <img src='https://s3.amazonaws.com/key-up-assets/Twitter-Logo-True.png' style={this.props.styles.topIcon} />
            <Typography variant='caption'>Twitter</Typography>
          </Grid>
        </a>
      </div>
    )
  }
}

export default Twitter;