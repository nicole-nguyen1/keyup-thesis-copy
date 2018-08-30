import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IntroCard from './IntroCard.jsx';
import EarningsOpenings from './EarningsOpenings.jsx';
import TasksSkills from './TasksSkills.jsx';
import ProsCons from './ProsCons.jsx';
import Trainings from './Trainings.jsx';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  profile: {
    [theme.breakpoints.up('sm')]: {
      width: '550px',
      margin: '0 auto'
    }
  },

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

  dark: {
    backgroundColor: '#232E49',
    borderRadius: 0,
    padding: '5px'
  },

  lightText: {
    color: '#EDEDED'
  },

  lightTextList: {
    color: '#EDEDED',
    display: 'inline'
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
        />
      </div>
    );
  } else {
    return null;
  }
}

export default withStyles(styles)(CareerProfile);