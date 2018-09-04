import React from 'react';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  cardStyle: {
    background: 'white',
    maxWidth: '800px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      display: 'table'
    }
  },
  cardContentStyle: {
    margin: '0 auto',
    padding: '40px 16px',
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'middle',
      padding: '40px 30px'
    }
  },
  headerStyle: {
    fontWeight: 'bold'
  },
  textStyle: {
    textAlign: 'justify',
    margin: '0 auto'
  },
  imageDiv: {
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'middle',
      padding: '30px 70px'
    }
  }
});

const About = ({ classes }) => {
  return (
    <div className={classes.cardStyle}>
      <div className={classes.cardContentStyle}>
        <Typography variant="headline"className={classes.headerStyle} gutterBottom>
          About KeyUp
        </Typography>
        <Typography className={classes.textStyle}>
          KeyUp's mission is to enable adults to get well-paying, 
          rewarding jobs without going through the time and expense 
          of getting four-year degrees. There are so many great 
          services out there to help people get better jobs, but 
          it is way too hard to access them. We wanted there to be 
          an easier, more personalized way for people to figure 
          out in-demand career options and the training services 
          and support propgrams that could help them get to those 
          new careers.
        </Typography>
      </div>
      <MediaQuery query='(min-width: 600px)'>
        <div className={classes.imageDiv}>
          <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Key-Detail-Blue-logo---big-for-Home-Page-About-KeyUp-Section.png'
            height='200px'
          />
        </div>
      </MediaQuery>
    </div>
  );
};

export default withStyles(styles)(About);