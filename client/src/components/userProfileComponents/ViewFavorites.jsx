import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const styles = theme => ({
  background: {
    padding: '25px 15px',
    [theme.breakpoints.up('sm')]: {
      width: '600px',
      margin: '0 auto'
    }
  },

  title: {
    display: 'inline-flex'
  },

  icon: {
    marginRight: '10px'
  },

  favorites: {
    [theme.breakpoints.up('sm')]: {
      display: 'table'
    }
  },

  section: {
    textAlign: 'center',
    paddingBottom: '30px',
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'bottom',
      padding: '0 30px 0 0'
    }
  },

  buttonDiv: {
    display: 'inline-block'
  },

  imageDiv: {
    width: '100px',
    margin: '0 auto'
  },

  image: {
    padding: '20px 0',
    width: '100px'
  },

  button: {
    backgroundColor: '#4469FF',
    borderRadius: '0',
    [theme.breakpoints.up('sm')]: {
      width: '290px'
    }
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
        <div className={classes.favorites}>
          <div className={classes.section}>
            <div className={classes.imageDiv}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Detailed-Briefcase-for-User-Profile-Page-black.png' className={classes.image} />
            </div>
            <div className={classes.buttonDiv}>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                href='/favorites/careers'>View Favorited Careers</Button>
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.imageDiv}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Schoolhouse-black.png' className={classes.image} />
            </div>
            <div className={classes.buttonDiv}>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                href='/favorites/training-services'>View Favorited Training Services</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ViewFavorites);