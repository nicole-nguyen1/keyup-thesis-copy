import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Outcomes = props => {
  const styles = {
    outcomes: {
      paddingLeft: '25px',
      paddingTop: '10px',
      marginBottom: '30px'
    },
    time: {
      marginBottom: '30px'
    }
  };

  return (
    <div>
      <Typography gutterBottom variant='title'>Outcomes</Typography>
      <Typography gutterBottom variant='body1'><strong>What you will get out of {props.service.career_name && props.service.career_name.toLowerCase()} training:</strong></Typography>
      <div style={styles.outcomes}>
        {props.service.outcomes && props.service.outcomes.map(outcome => {
          return <Typography gutterBottom variant='body1' key={outcome.id}>{outcome.description}</Typography>;
        })}
      </div>
      <div style={styles.time}>
        <Typography gutterBottom variant='title'>Time Commitment</Typography>
        <Typography gutterBottom variant='body1'>{props.service.program_length_total}</Typography>
        <Typography gutterBottom variant='body1'>{props.service.program_total_weekly}</Typography>
        <Typography gutterBottom variant='body1'>{props.service.program_class_times}</Typography>
      </div>
      <div>
        <Typography gutterBottom variant='title'>Location</Typography>
        <Typography gutterBottom variant='body1'>{props.service.location}</Typography>
      </div>
    </div>
  );
};

export default Outcomes;
