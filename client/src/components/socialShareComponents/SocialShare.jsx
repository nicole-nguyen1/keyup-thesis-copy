import React from 'react';
import Facebook from './Facebook.jsx';
import Twitter from './Twitter.jsx';
import Reddit from './Reddit.jsx';
import Email from './Email.jsx';
import Text from './Text.jsx';
import CopyLink from './CopyLink.jsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { isMobileOnly } from 'react-device-detect';
import smsLink from 'sms-link';

class SocialShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
      snackBarOpen: false,
      textOpen: false,
      textLink: ''
    }
  }

  handleChange = (e) => {
    this.setState({ 
      textLink: smsLink({ phone: `1${e.target.value}`, body: this.state.url })
    });
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
            <Facebook 
              styles={styles} 
              url={this.state.url} />
            <Twitter 
              styles={styles} 
              url={this.state.url} />
            <Reddit 
              styles={styles} 
              url={this.state.url} />
          </div>
          <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
            <Email 
              styles={styles} 
              url={this.state.url} />
            {/* Show Text component for mobile devices only, excludes tablets */}
            {isMobileOnly ? 
              <Text 
                styles={styles} 
                url={this.state.url} 
                handleClick={() => this.handleClick('textOpen')}/> : null}
            <CopyLink 
              styles={styles} 
              url={this.state.url} 
              handleClick={() => this.handleClick('snackBarOpen')}/>
          </div>
        </Drawer>

        {/* This dialog opens when a user wishes to text the page url to someone */}
        <Dialog
          open={this.state.textOpen}
          onClose={() => this.handleClose('textOpen')}
          aria-labelledby="text-title"
        >
          <DialogTitle id="text-title">{"Share This Page"}</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Enter the phone number of the person you want to text. 
            </Typography>
            <Typography>
              Not sure what their number is? 
              Click the button below and you'll be able to search your contact list.
            </Typography>
            <TextField
              id="text-recipient-input"
              fullWidth
              label="Enter a phone number"
              value={this.state.phoneNum}
              onChange={this.handleChange}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose('textOpen')} color="primary">
              Cancel
            </Button>
            <a href={this.state.textLink} style={{ textDecoration: 'none' }}>
              <Button color="primary" autoFocus style={{ backgroundColor: '2979ff', color: 'EDEDEE' }}>
                Send Text
              </Button>
            </a>
          </DialogActions>
        </Dialog>

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