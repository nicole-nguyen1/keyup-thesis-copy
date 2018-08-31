import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  image: {
    backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/keyup-assets/Copy-of-Home-Page-Top-Image.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      height: '60vh'
    },
    [theme.breakpoints.up('lg')]: {
      height: '65vh'
    }
  },
  foreground: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      height: '60vh'
    },
    [theme.breakpoints.up('lg')]: {
      height: '65vh'
    }
  },
  textSection: {
    textAlign: 'center',
    padding: '10vh 5vh',
    [theme.breakpoints.up('md')]: {
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'table-cell',
      verticalAlign: 'middle'
    }
  },
  blackBox: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: '60vh',
      display: 'table'
    },
    [theme.breakpoints.up('lg')]: {
      height: '65vh',
      display: 'table'
    }
  },
  headline: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '3em',
      maxWidth: '800px',
      margin: '0 auto'
    }
  },
  subheading: {
    fontWeight: '300',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5em',
      maxWidth: '800px',
      margin: '0 auto'
    }
  }
});
class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const { classes } = this.props;
    return (
      <div className={classes.image}>
        <div className={classes.foreground}>
          <div className={classes.blackBox}>
            <div className={classes.textSection}>
              <Typography gutterBottom variant="headline" color='inherit' className={classes.headline}>
            Find your path to a solid career that doesn't require a 4-year degree
              </Typography>
              <Typography variant="subheading" color='inherit' className={classes.subheading}>
            Find careers, training services, and support programs that can get you to the 
            middle class without a 4-year degree 
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);