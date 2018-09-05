import React from 'react';
import Facebook from './Facebook.jsx';
import Twitter from './Twitter.jsx';
import Reddit from './Reddit.jsx';
import Email from './Email.jsx';
import Text from './Text.jsx';
import CopyLink from './CopyLink.jsx';
import SendTextDialog from './SendTextDialog.jsx';
import { Drawer, Snackbar } from '@material-ui/core';
import { isMobileOnly } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  drawer: {
    textAlign: 'center'
  },
  paper: {
    [theme.breakpoints.up('sm')]: {
      width: '580px',
      margin: '0 auto'
    }
  }
});
class SocialShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
      snackBarOpen: false,
      textOpen: false,
      textLink: ''
    };
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
    };

    const { classes } = this.props;
    return (
      <div>
        <Drawer
          anchor="bottom"
          open={this.props.open}
          onClose={this.props.toggleDrawer}
          className={classes.drawer}
          PaperProps={{
            classes: {
              root: classes.paper
            }
          }}>
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

        {/* This dialog opens when you click to send a text */}
        <SendTextDialog 
          url={this.state.url}
          open={this.state.textOpen} 
          handleClick={this.handleClick} 
          handleClose={this.handleClose}/>

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
    );
  }
}

export default withStyles(styles)(SocialShare);