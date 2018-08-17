import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FacebookProvider, { Share } from 'react-facebook-sdk';

class Facebook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(process.env.FB_APP_ID);
    return (
        <div style={this.props.styles.row}>
        <FacebookProvider appId={process.env.FB_APP_ID}>
            <Share href={this.props.url}>
              <Grid item
                role="button">
                <img src='https://s3.amazonaws.com/key-up-assets/facebook-logo-true.png' style={this.props.styles.topIcon} />
                <Typography variant='caption'>Facebook</Typography>
              </Grid>
            </Share>
          </FacebookProvider>
        </div>
    )
  }
}

export default Facebook;