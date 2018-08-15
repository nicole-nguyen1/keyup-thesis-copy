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

class IntroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerState: false
    }
  }

  toggleDrawer = () => {
    this.setState({ drawerState: !this.state.drawerState })
  }

  render() {
    const styles = {
      cardAction: { 
        display: 'block', 
        textAlign: 'right',
        marginTop: '10px',
        padding: '0 10px 0 0' 
      },

      icon: {
        position: 'relative',
        top: '-4px',
        left: '10px',
        height: '1em'
      },

      link: {
        color: '#7A94F4'
      },

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
        <Card style={{ borderRadius: 0 }}>
          <CardMedia
            image={this.props.career.profile_image_url}
            style={{ height: '35vh' }} />
          <CardActions style={styles.cardAction}>
            <Button component={Link} to={`/services/${this.props.careerID}`}>
              <Typography gutterBottom variant='body1' style={styles.link}>FIND TRAINING</Typography>
              <img src='https://s3.amazonaws.com/key-up-assets/Graduation-Cap-icon.png' style={styles.icon} />
            </Button>
            <Button onClick={this.toggleDrawer}>
              <Typography gutterBottom variant='body1' style={styles.link}>SHARE</Typography>
              <img src='https://s3.amazonaws.com/key-up-assets/Share-Symbol.png' style={styles.icon} />
            </Button>
          </CardActions>
          <CardContent style={{ paddingTop: 0 }}>
            <Typography gutterBottom variant='headline'>{this.props.career.name}</Typography>
            <Typography variant='body1'>{this.props.career.description}</Typography>
          </CardContent>
        </Card>
        <Drawer
          anchor="bottom"
          open={this.state.drawerState}
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
  }
}

export default IntroCard;