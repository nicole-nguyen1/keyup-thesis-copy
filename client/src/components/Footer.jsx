import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

var Footer = function () {
  const styles = {
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
      padding: '0 20px',
      color: '#EDEDED'
    },

    link: {
      color: '#EDEDED'
    }
  };

  return (
    <Card style={styles.footer}>
      <CardContent>
        <div style={styles.section}>
          <Grid item xs={4} style={styles.icon}>
            <img src='https://s3.amazonaws.com/key-up-assets/facebook-logo-icon-white.png' width='25px' height='25px' />
          </Grid>
          <Grid item xs={4} style={styles.icon}>
            <img src='https://s3.amazonaws.com/key-up-assets/linkedin-icon-white.png' width='25px' height='25px' />
          </Grid>
          <Grid item xs={4} style={styles.icon}>
            <img src='https://s3.amazonaws.com/key-up-assets/instagram-icon-white.png' width='25px' height='25px' />
          </Grid>
        </div>
        <div style={styles.section}>
          <Grid item xs={4} style={styles.text}><Typography variant='body1' style={styles.text}>&copy; KeyUp LLC</Typography></Grid>
          <Grid item xs={4} style={styles.text}><Typography variant='body1' style={styles.text}><a href='' style={styles.link}>Terms of Service</a></Typography></Grid>
          <Grid item xs={4} style={styles.text}><Typography variant='body1' style={styles.text}><a href='' style={styles.link}>Privacy Policy</a></Typography></Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;