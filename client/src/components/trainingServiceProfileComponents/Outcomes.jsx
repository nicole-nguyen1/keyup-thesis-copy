import React from 'react';
import MultiLineParagraph from '../reusableComponents/MultiLineParagraph.jsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  outcomes: {
    paddingLeft: '25px',
    paddingTop: '10px',
    marginBottom: '30px'
  },
  time: {
    marginBottom: '30px'
  }
});

const Outcomes = props => {
  const { classes } = props;

  return (
    <div>
      <Typography gutterBottom variant='title'>Outcomes</Typography>
      <Typography gutterBottom variant='body1'><strong>What you will get out of {props.service.career_name && props.service.career_name.toLowerCase()} training:</strong></Typography>
      <div className={classes.outcomes}>
        {props.service.outcomes && props.service.outcomes.map(outcome => {
          return <Typography gutterBottom variant='body1' key={outcome.id}>{outcome.description}</Typography>;
        })}
      </div>
      <div className={classes.time}>
        <Typography gutterBottom variant='title'>Time Commitment</Typography>
        <Typography gutterBottom variant='body1'>{props.service.program_length_total}</Typography>
        <Typography gutterBottom variant='body1'>{props.service.program_total_weekly}</Typography>
        <Typography gutterBottom variant='body1'>{props.service.program_class_times}</Typography>
      </div>
      <div>
        <Typography gutterBottom variant='title'>Location</Typography>
        <div>
          {props.service.location ? <MultiLineParagraph text={props.service.location}/> : props.service.location }
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Outcomes);
