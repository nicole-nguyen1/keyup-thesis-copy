import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const ApplicationProcess = props => {
  const styles = {
    card: {
      paddingTop: '30px',
      paddingBottom: '20px'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%'
    },
    linkContainer: {
      textAlign: 'center'
    },
    link: {
      textDecoration: 'none',
      color: '#7a94f4'
    }
  };

  return (
    <div>
      <Card style={styles.card} >
        <CardContent>
          <Typography gutterBottom variant='title'>Application Process</Typography>
          <Typography gutterBottom variant='body1'>Use the buttons below to learn how to apply to this training service or contact one of our KeyUp guides for advice.</Typography>
        </CardContent>
        <CardActions >
          <div style={styles.buttons} >
            <Button variant="contained" color="primary" style={{backgroundColor: '#4e74ff'}}>
              APPLY NOW
            </Button>
            <Button variant="contained" color="primary" style={{backgroundColor: '88888a'}}>
              GET ADVICE
            </Button>
          </div>
        </CardActions>
        <CardContent style={styles.linkContainer}>
          <Typography gutterBottom variant='body1'><a style={styles.link} href={props.service.program_url}>Go to {props.service.name} website</a></Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationProcess;
