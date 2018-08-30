import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const styles = theme => ({
  background: {
    padding: '25px 15px'
  },

  title: {
    display: 'inline-flex'
  },

  icon: {
    marginRight: '10px'
  },

  section: {
    textAlign: 'center',
    paddingBottom: '30px'
  },

  image: {
    padding: '20px',
    width: '100px'
  },

  button: {
    backgroundColor: '#4469FF',
    borderRadius: '0'
  }
});

class ViewFavorites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.background}>
        <div className={classes.title}>
          <FavoriteIcon className={classes.icon}/>
          <Typography variant='title'>Favorites</Typography>
        </div>
        <div className={classes.section}>
          <img src='https://s3.amazonaws.com/keyup-assets/Detailed-Briefcase-for-User-Profile-Page-black.png' className={classes.image} />
          <Button 
            variant='contained' 
            color='primary' 
            className={classes.button} 
            href='/favorites/careers'>View Favorited Careers</Button>
        </div>
        <div className={classes.section}>
          <img src='https://s3.amazonaws.com/keyup-assets/Schoolhouse-black.png' className={classes.image} />
          <Button 
            variant='contained' 
            color='primary' 
            className={classes.button} 
            href='/favorites/training-services'>View Favorited Training Services</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ViewFavorites);