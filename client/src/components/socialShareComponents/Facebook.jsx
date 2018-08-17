import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Facebook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        appId: process.env.FB_APP_ID,
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.1' // use version 2.1
      });

      FB.ui({
        method: 'share',
        href: this.props.url,
      }, (response) => {
        console.log(response);
      }).bind(this);

      //load FB SDK
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }

  handleClick = () => {
    window.FB.ui({
      method: 'share',
      href: this.props.url
    }, (response) => {
      if (response && !response.error_message) {
        alert('Posting completed');
      } else {
        alert('Error while posting');
      }
    });
  };

  render() {
    return (
        <div style={this.props.styles.row}>
          <a onClick={this.handleClick}>
            <Grid item
              role="button">
              <img src='https://s3.amazonaws.com/key-up-assets/facebook-logo-true.png' style={this.props.styles.topIcon} />
              <Typography variant='caption'>Facebook</Typography>
            </Grid>
          </a>
        </div>
    )
  }
}

export default Facebook;