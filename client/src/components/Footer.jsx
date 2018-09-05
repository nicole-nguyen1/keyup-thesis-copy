import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: '#444447',
    color: '#EDEDED',
    borderRadius: 0
  },

  section: {
    textAlign: 'center',
    padding: '10px 0',
    fontFamily: 'Roboto'
  },

  icon: {
    display: 'inline',
    padding: '0 10px',
  },

  text: {
    display: 'inline',
    padding: '0 5px',
    color: '#EDEDED',
    fontSize: '10px'
  },

  link: {
    color: '#EDEDED'
  }
});

const Footer = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.footer}>
      <CardContent>
        <div className={classes.section}>
          <Grid item xs={4} className={classes.icon}>
            <a href='https://www.facebook.com/KeyUpAustin/'>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/facebook-logo-icon-white.png' width='25px' height='25px' />
            </a>
          </Grid>
          <Grid item xs={4} className={classes.icon}>
            <a href='https://www.linkedin.com/company/keyupaustin/'>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/linkedin-icon-white.png' width='25px' height='25px' />
            </a>
          </Grid>
          <Grid item xs={4} className={classes.icon}>
            <a href='https://www.instagram.com/keyupaustin/?hl=en'>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/instagram-icon-white.png' width='25px' height='25px' />
            </a>
          </Grid>
        </div>
        <div className={classes.section}>
          <Grid item xs={4} className={classes.text}><Typography variant='body1' className={classes.text}>&copy; KeyUp LLC</Typography></Grid>
          <Grid item xs={4} className={classes.text}><Typography variant='body1' className={classes.text}><a href='/terms-and-conditions' className={classes.link}>Terms of Service</a></Typography></Grid>
          <Grid item xs={4} className={classes.text}><Typography variant='body1' className={classes.text}><a href='/privacy-policy' className={classes.link}>Privacy Policy</a></Typography></Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Footer);