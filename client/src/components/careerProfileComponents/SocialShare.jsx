import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class SocialShare extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   drawerState: false
    // }
  }

  // toggleDrawer = () => {
  //   this.setState({ drawerState: !this.state.drawerState })
  // }

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
          open={this.props.open.drawerState}
          onClose={this.toggleDrawer}
          style={{ textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
            <Grid item xs={4}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}>
              <img src='https://s3.amazonaws.com/key-up-assets/facebook-logo-true.png' style={styles.shareTopRow}/>
              <Typography variant='caption'>Facebook</Typography>
            </Grid>
            <Grid item xs={4}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}>
              <img src='https://s3.amazonaws.com/key-up-assets/Twitter-Logo-True.png' style={styles.shareTopRow} />
              <Typography variant='caption'>Twitter</Typography>
            </Grid>
            <Grid item xs={4}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}>
              <img src='https://s3.amazonaws.com/key-up-assets/Reddit-logo-true.png' style={styles.shareTopRow} />
              <Typography variant='caption'>Reddit</Typography>
            </Grid>
          </div>
          <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
            <Grid item xs={4}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}>
              <img src='https://s3.amazonaws.com/key-up-assets/Email-Icon.png' style={styles.shareBottomRow}/>
              <Typography variant='caption'>Email</Typography>
            </Grid>
            <Grid item xs={4}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}>
              <img src='https://s3.amazonaws.com/key-up-assets/Text-Icon.png' style={styles.shareBottomRow}/>
              <Typography variant='caption'>Text</Typography>
            </Grid>
            <Grid item xs={4}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}>
              <img src='https://s3.amazonaws.com/key-up-assets/Link-symbol-black.png' style={styles.shareBottomRow}/>
              <Typography variant='caption'>Copy Link</Typography>
            </Grid>
          </div>
        </Drawer>
      </div>
    )
  }s
}

export default SocialShare;