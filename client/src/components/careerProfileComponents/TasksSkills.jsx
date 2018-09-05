import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    borderRadius: 0,
    padding: '5px'
  },

  bullets: {
    position: 'relative',
    height: '1em',
    top: '2px',
    marginRight: '20px'
  },

  listItem: {
    margin: '10px 0'
  },

  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});

const TasksSkills = (props) => {
  const { classes } = props;
  
  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant='title'>Typical Tasks</Typography>
          {props.career.tasks ?
            props.career.tasks.map((task) => {
              return (
                <div key={task.id} className={classes.listItem}>
                  <img
                    className={classes.bullets}
                    src='https://s3.us-east-2.amazonaws.com/keyup-assets/Checkbox-for-Typical-Tasks-Icon.png' />
                  <Typography gutterBottom variant='body1' style={{ display: 'inline' }}>{task.description}</Typography>
                </div>
              );
            }) : null}
        </CardContent>
        <CardContent className={classes.content}>
          <Typography variant='title'>Skills Needed</Typography>
          {props.career.skills ?
            props.career.skills.map((skill) => {
              return (
                <div key={skill.id} className={classes.listItem}>
                  <img
                    className={classes.bullets}
                    src='https://s3.us-east-2.amazonaws.com/keyup-assets/Head-Symbol.png' />
                  <Typography gutterBottom variant='body1' style={{ display: 'inline' }}>{skill.description}</Typography>
                </div>
              );
            }) : null}
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(TasksSkills);