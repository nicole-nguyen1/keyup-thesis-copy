import React from 'react';
import IntroCard from './IntroCard.jsx';
import EarningsOpenings from './EarningsOpenings.jsx';
import TasksSkills from './TasksSkills.jsx';
import ProsCons from './ProsCons.jsx';
import Trainings from './Trainings.jsx';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  profile: {
    [theme.breakpoints.up('sm')]: {
      width: '550px',
      margin: '0 auto'
    }
  },

  dark: {
    backgroundColor: '#232E49',
    borderRadius: 0,
    padding: '5px'
  },

  lightText: {
    color: '#EDEDED'
  },

  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});
const CareerProfile = (props) => {
  const { classes } = props;

  if (props.career) {
    const career = props.career;

    return (
      <div className={classes.profile}>
        <IntroCard 
          career={career} 
          careerID={props.careerID} 
          favorites={props.favorites}
          removeFavorite={props.removeFavorite}
          addFavorite={props.addFavorite}
          handlePopUp={props.handlePopUp}
        />
        <EarningsOpenings career={career} />
        <TasksSkills career={career}/>
        <Card className={classes.dark}>
          <CardContent className={classes.content}>
            <Typography variant='title' className={classes.lightText}>Job Satisfaction</Typography>
          </CardContent>
          <ProsCons info={career} />
        </Card>
        <Trainings 
          career={career} 
          careerID={props.careerID} 
          favorites={props.favorites}
          removeFavorite={props.removeFavorite}
          addFavorite={props.addFavorite}
          handlePopUp={props.handlePopUp}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default withStyles(styles)(CareerProfile);