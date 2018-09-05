import React from 'react';
import SocialShare from '../socialShareComponents/SocialShare.jsx';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HeartContainer from '../../containers/HeartContainer.jsx';

const styles = theme => ({
  image: {
    height: '35vh',
    [theme.breakpoints.up('sm')]: {
      height: '30vh'
    }
  },
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
class IntroCard extends React.Component {
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
          <CardMedia
            image={this.props.career.profile_image_url || '#'}
            className={classes.image} />
          <div className={classes.cardAction}>
            <Button component={Link} to={`/services/${this.props.careerID}`} className={classes.button}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/graduation-cap-gray.png' className={classes.icon} />
              <Typography gutterBottom variant='body1' className={classes.link}>FIND TRAINING</Typography>
            </Button>
            <HeartContainer 
              profile={true}
              favorites={this.props.favorites}
              careerID={String(this.props.careerID)}
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
            <Typography gutterBottom variant='headline'>{this.props.career.name}</Typography>
            <Typography variant='body1'>{this.props.career.description}</Typography>
          </CardContent>
        </Card>
        <SocialShare open={this.state.drawerState} toggleDrawer={this.toggleDrawer}/>
      </div>
    );
  }
}

export default withStyles(styles)(IntroCard);