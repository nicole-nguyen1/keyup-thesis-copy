import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TasksSkills = (props) => {
  const styles = {
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
    }
  }
  return (
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant='title'>Typical Tasks</Typography>
          {props.career.tasks.map((task) => {
              return (
                <div key={task.id} style={styles.listItem}>
                  <img
                    style={styles.bullets}
                    src='https://s3.amazonaws.com/key-up-assets/Checkbox-for-Typical-Tasks-Icon.png' />
                  <Typography gutterBottom variant='body1' style={{ display: 'inline' }}>{task.description}</Typography>
                </div>
              )
          })}
        </CardContent>
        <CardContent>
          <Typography variant='title'>Skills Needed</Typography>
          {props.career.skills.map((skill) => {
              return (
                <div key={skill.id} style={styles.listItem}>
                  <img
                    style={styles.bullets}
                    src='https://s3.amazonaws.com/key-up-assets/Head-Symbol.png' />
                  <Typography gutterBottom variant='body1' style={{ display: 'inline' }}>{skill.description}</Typography>
                </div>
              )
          })}
        </CardContent>
      </Card>
    </div>
  )
}

export default TasksSkills;