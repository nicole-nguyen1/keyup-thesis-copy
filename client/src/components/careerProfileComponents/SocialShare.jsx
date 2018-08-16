import React from 'react';
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

  handleClick = () => {
    this.setState({ snackBarOpen: true });
  };

  handleClose = () => {
    this.setState({ snackBarOpen: false });
  };

  render() {
    const styles = {
      shareTopRow: {
        width: '25px',
        height: '25px',
        padding: '12.5px'
      },

      shareBottomRow: {
        width: '50px',
        height: '50px'
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
            <Grid item xs={4}
              role="button">
              <img src='https://s3.amazonaws.com/key-up-assets/facebook-logo-true.png' style={styles.shareTopRow}/>
              <Typography variant='caption'>Facebook</Typography>
            </Grid>
            <Grid item xs={4}
              role="button">
              <img src='https://s3.amazonaws.com/key-up-assets/Twitter-Logo-True.png' style={styles.shareTopRow} />
              <Typography variant='caption'>Twitter</Typography>
            </Grid>
            <Grid item xs={4}
              role="button">
              <img src='https://s3.amazonaws.com/key-up-assets/Reddit-logo-true.png' style={styles.shareTopRow} />
              <Typography variant='caption'>Reddit</Typography>
            </Grid>
          </div>
          <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
            <Grid item xs={4}
              role="button">
              <img src='https://s3.amazonaws.com/key-up-assets/Email-Icon.png' style={styles.shareBottomRow}/>
              <Typography variant='caption'>Email</Typography>
            </Grid>
            <Grid item xs={4}
              role="button">
              <img src='https://s3.amazonaws.com/key-up-assets/Text-Icon.png' style={styles.shareBottomRow}/>
              <Typography variant='caption'>Text</Typography>
            </Grid>
            <CopyToClipboard 
              text={this.state.url}
              onCopy={() => this.setState({ copied: true })}>
              <Grid item xs={4}
                role="button"
                onClick={this.handleClick}>
                <img src='https://s3.amazonaws.com/key-up-assets/Link-symbol-black.png' style={styles.shareBottomRow} />
                <Typography variant='caption'>Copy Link</Typography>
              </Grid>
            </CopyToClipboard>
          </div>
        </Drawer>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={1500}
          open={this.state.snackBarOpen}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Link copied!</span>}
        />
      </div>
    )
  }
}

export default SocialShare;