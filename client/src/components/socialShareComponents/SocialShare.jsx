import React from 'react';
import Facebook from './Facebook.jsx';
import Twitter from './Twitter.jsx';
import Reddit from './Reddit.jsx';
import Email from './Email.jsx';
import Text from './Text.jsx';
import CopyLink from './CopyLink.jsx';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class SocialShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
      copied: false,
      snackBarOpen: false
    }
  }

  handleClick = (state) => {
    this.setState({ [state]: true });
  };

  handleClose = (state) => {
    this.setState({ [state]: false });
  };

  render() {
    const styles = {
      topIcon: {
        width: '25px',
        height: '25px',
        padding: '12.5px'
      },

      bottomIcon: {
        width: '50px',
        height: '50px'
      },

      row: {
        width: '33%'
      }
    }

    return (
      <div>
        <Drawer
          anchor="bottom"
          open={this.props.open}
          onClose={this.props.toggleDrawer}
          style={{ textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
            <Facebook styles={styles} />
            <Twitter styles={styles} />
            <Reddit styles={styles} />
          </div>
          <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
            <Email styles={styles} />
            <Text styles={styles} />
            <CopyLink styles={styles} handleClick={() => this.handleClick('snackBarOpen')}/>
          </div>
        </Drawer>
        {/* The snackbar notification below is a success message once you click 'Copy Link' */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={1500}
          open={this.state.snackBarOpen}
          onClose={() => this.handleClose('snackBarOpen')}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id="message-id">Link copied!</span>}
        />
      </div>
    )
  }
}

export default SocialShare;