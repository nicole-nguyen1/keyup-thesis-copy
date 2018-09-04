import React from 'react';
import HeartContainer from '../../containers/HeartContainer.jsx';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    borderRadius: 0,
    padding: '5px'
  },

  button: {
    margin: '0px auto 10px',
    backgroundColor: '#4469FF'
  },

  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});

const Trainings = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='title'>Training</Typography>
          <Typography gutterBottom variant='body1'>{props.career.number_of_services} training services in Austin</Typography>
          <Typography gutterBottom variant='body1'><strong>Length:</strong> {props.career.training_length}</Typography>
          <Typography gutterBottom variant='body1'><strong>Hours:</strong> {props.career.training_hours}</Typography>
          <Typography variant='body1'><strong>Cost Range:</strong> {props.career.training_cost}</Typography>
        </CardContent>
        <CardActions style={{ margin: '0px auto 10px' }}>
          <Button component={Link} to={`/services/${props.careerID}`} variant="contained" color="primary" className={classes.button}>
            SEE TRAINING SERVICES
          </Button>
        </CardActions>
        <div style={{ textAlign: 'center'}}>
          <HeartContainer 
            profile={true} 
            size={'large'}
            favorites={props.favorites}
            careerID={String(props.careerID)}
            removeFavorite={props.removeFavorite}
            addFavorite={props.addFavorite}
            handlePopUp={props.handlePopUp}
          />
        </div>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Trainings);