import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Trainings = (props) => {
  const styles = {
    card: {
      borderRadius: 0,
      padding: '5px'
    }
  }

  return (
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Typography gutterBottom variant='title'>Training</Typography>
          <Typography gutterBottom variant='body1'>{props.career.number_of_services} training services in Austin</Typography>
          <Typography gutterBottom variant='body1'><strong>Length:</strong> {props.career.training_length}</Typography>
          <Typography gutterBottom variant='body1'><strong>Hours:</strong> {props.career.training_hours}</Typography>
          <Typography variant='body1'><strong>Cost Range:</strong> {props.career.training_cost}</Typography>
        </CardContent>
        <CardActions style={{ margin: '0px auto 10px' }}>
          <Button variant="contained" color="primary" style={{ margin: '0px auto 10px' }}>
            SEE TRAINING SERVICES
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Trainings;