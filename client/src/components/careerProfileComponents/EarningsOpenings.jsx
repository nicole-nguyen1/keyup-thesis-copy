import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  dark: {
    backgroundColor: '#232E49',
    borderRadius: 0,
    padding: '5px'
  },

  lightText: {
    color: '#EDEDED'
  },

  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});

const EarningsOpenings = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.dark}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='title' className={classes.lightText}>Average Earnings</Typography>
          <Typography variant='body1' className={classes.lightText}>
            <span style={{ color: '#1DCD8C' }}>{props.career.annual_salary}</span> or {props.career.hourly_pay}/hr
          </Typography>
        </CardContent>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='title' className={classes.lightText}>Job Openings</Typography>
          {props.career.openings ?
            <div>
              <Typography variant='body1' className={classes.lightText}>
                <span style={{ color: '#1DCD8C' }}>{props.career.openings.split(': ')[0]}&#58;</span><span> {props.career.openings.split(': ')[1]}</span>
              </Typography>
            </div> : null}
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(EarningsOpenings);