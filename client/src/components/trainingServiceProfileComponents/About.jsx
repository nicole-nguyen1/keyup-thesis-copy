import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SocialShare from '../socialShareComponents/SocialShare.jsx';
import { withStyles } from '@material-ui/core';
import HeartComponent from '../heartComponents/HeartContainer.jsx';

const styles = theme => ({
  cardAction: {
    // display: 'block',
    // textAlign: 'right',
    // marginTop: '10px',
    // padding: '0 10px 0 0'
    textAlign: 'center',
    display: 'flex',
    width: '300px',
    margin: '0 auto'
  },

  button: {
    display: 'block',
    position: 'relative',
    bottom: '2px'
  },

  icon: {
    // position: 'relative',
    // top: '-4px',
    // left: '10px',
    // height: '1em'
    position: 'relative',
    padding: '5px',
    height: '1em'
  },

  link: {
    color: '#88888A'
  },

  shareTopRow: {
    width: '25px',
    height: '25px',
    padding: '12.5px'
  },

  shareBottomRow: {
    width: '50px',
    height: '50px'
  },

  content: {
    paddingTop: '0',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
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

    return (
      <div>
        <Card style={{ borderRadius: 0 }}>
          <div className={classes.cardAction}>
            <Button onClick={this.props.toggleQualifyDialog} className={classes.button}>
              <img src='https://s3.amazonaws.com/key-up-assets/Get-Advice-Symbol-Gray.png' className={classes.icon} />
              <Typography gutterBottom variant='body1' className={classes.link}>ADVICE</Typography>
            </Button>
            <Button onClick={this.props.toggleDialog} className={classes.button}>
              <img src='https://s3.amazonaws.com/key-up-assets/graduation-cap-gray.png' className={classes.icon} />
              <Typography gutterBottom variant='body1' className={classes.link}>APPLY</Typography>
            </Button>
            <HeartComponent 
              profile={true}
              serviceID={this.props.service.id}
              favorites={this.props.favorites}
              removeFavorite={this.props.removeFavorite}
              addFavorite={this.props.addFavorite}
            />
            <Button onClick={this.toggleDrawer} className={classes.button}>
              <img src='https://s3.amazonaws.com/key-up-assets/Share-gray.png' className={classes.icon} />
              <Typography gutterBottom variant='body1' className={classes.link}>SHARE</Typography>
            </Button>
          </div>
          <CardContent className={classes.content}>
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