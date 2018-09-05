import React from 'react';
import HeartContainer from '../../containers/HeartContainer.jsx';
import SocialShare from '../socialShareComponents/SocialShare.jsx';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  cardAction: {
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
    };
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
            <Button onClick={this.props.toggleAdviceForm} className={classes.button}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Get-Advice-Symbol-Gray.png' className={classes.icon} />
              <Typography gutterBottom variant='body1' className={classes.link}>ADVICE</Typography>
            </Button>
            <Button onClick={this.props.toggleDialog} className={classes.button}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/graduation-cap-gray.png' className={classes.icon} />
              <Typography gutterBottom variant='body1' className={classes.link}>APPLY</Typography>
            </Button>
            <HeartContainer 
              profile={true}
              serviceID={this.props.service.id}
              favorites={this.props.favorites}
              removeFavorite={this.props.removeFavorite}
              addFavorite={this.props.addFavorite}
              handlePopUp={this.props.handlePopUp}
            />
            <Button onClick={this.toggleDrawer} className={classes.button}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Share-gray.png' className={classes.icon} />
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
    );
  }
}

export default withStyles(styles)(About);