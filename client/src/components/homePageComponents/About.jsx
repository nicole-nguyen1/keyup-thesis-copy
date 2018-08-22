import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  cardStyle: {
    background: 'white',
    borderRadius: '0'
  },
  cardContentStyle: {
    maxWidth: '400px',
    margin: '0 auto'
  },
  headerStyle: {
    fontWeight: 'bold'
  },
  textStyle: {
    textAlign: 'justify',
    margin: '0 auto'
  }
});

const About = ({ classes }) => {
  return (
    <Card className={classes.cardStyle}>
      <CardContent className={classes.cardContentStyle}>
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
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(About);