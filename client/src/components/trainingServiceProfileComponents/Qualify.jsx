import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const Qualify = props => {
  const styles = {
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
  };

  return (
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Typography style={styles.text} gutterBottom variant='title'>What help do you qualify for?</Typography>
          <Typography style={styles.text} gutterBottom variant='body1'>Answer a few questions, and we can help you access financial support, free childcare, career services and more.</Typography>
        </CardContent>
        <CardActions style={styles.action}>
          <Button
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={props.openForm}
          >
            GET SUPPORT REC'S
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Qualify;