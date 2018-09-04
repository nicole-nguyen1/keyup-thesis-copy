import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    borderRadius: 0,
    padding: '5px',
    backgroundColor: '#834A8F'
  },
  text: {
    color: '#ededee'
  },
  button: {
    backgroundColor: '#b367c2'
  },
  action: {
    margin: '0px auto 10px'
  },
  linkButton: {
    margin: '0px auto 10px',
    textDecoration: 'none'
  }
});

const Qualify = props => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.text} gutterBottom variant='title'>What help do you qualify for?</Typography>
          <Typography className={classes.text} gutterBottom variant='body1'>Answer a few questions, and we can help you access financial support, free childcare, career services and more.</Typography>
        </CardContent>
        <CardActions className={classes.action}>
          <a className={classes.linkButton} href='https://keyup.typeform.com/to/Jt4pxV'>
            <Button
              variant="contained" 
              color="primary" 
              className={classes.button}
            >
              GET SUPPORT REC'S
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Qualify);