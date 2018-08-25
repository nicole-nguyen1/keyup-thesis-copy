import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import SocialShare from '../socialShareComponents/SocialShare.jsx';
import { withStyles } from '@material-ui/core';
import HeartComponent from '../heartComponents/HeartContainer.jsx';

const styles = theme => ({
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
});
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerState: false
    }
  }

  toggleDrawer = () => {
    this.setState({ drawerState: !this.state.drawerState });
  }

  render() {
    const { classes } = this.props;
    console.log('props in about', this.props)
    return (
      <div>
        <Card style={{ borderRadius: 0 }}>
        <CardActions className={classes.cardAction}>
        <Button onClick={this.props.toggleQualifyDialog}>
              <Typography gutterBottom variant='body1' className={classes.link}>ADVICE</Typography>
              <img src='https://s3.amazonaws.com/key-up-assets/Advice-Icon-Blue.png' className={classes.icon} />
            </Button>
            <Button onClick={this.props.toggleDialog}>
              <Typography gutterBottom variant='body1' className={classes.link}>APPLY</Typography>
              <img src='https://s3.amazonaws.com/key-up-assets/Graduation-Cap-icon.png' className={classes.icon} />
            </Button>
            <HeartComponent 
              profile={true}
              serviceID={this.props.service.id}
              favorites={this.props.favorites}
              removeFavorite={this.props.removeFavorite}
              addFavorite={this.props.addFavorite}
            />
            <Button onClick={this.toggleDrawer}>
              <Typography gutterBottom variant='body1' className={classes.link}>SHARE</Typography>
              <img src='https://s3.amazonaws.com/key-up-assets/Share-Symbol.png' className={classes.icon} />
            </Button>
          </CardActions>
          <CardContent style={{ paddingTop: 0 }}>
            <Typography gutterBottom variant='headline'>About</Typography>
            <Typography variant='body1'>{this.props.service.about}</Typography>
          </CardContent>
        </Card>
        <SocialShare open={this.state.drawerState} toggleDrawer={this.toggleDrawer}/>
      </div>
    )
  }
}

export default withStyles(styles)(About);