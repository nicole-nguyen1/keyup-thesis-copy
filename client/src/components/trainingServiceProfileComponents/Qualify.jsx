import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
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
    margin: '0px auto 10px',
    backgroundColor: '#b367c2'
  },
  action: {
    margin: '0px auto 10px'
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
          <Button
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={props.openForm}
          >
            GET SUPPORT REC'S
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Qualify);