import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IntroCard from './IntroCard.jsx';
import EarningsOpenings from './EarningsOpenings.jsx';
import TasksSkills from './TasksSkills.jsx';
import ProsCons from './ProsCons.jsx';
import Trainings from './Trainings.jsx';

class CareerProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      }
    }

    if (this.props.career) {
      const career = this.props.career;

      return (
        <div>
          <IntroCard career={career} />
          <EarningsOpenings career={career} />
          <TasksSkills career={career}/>
          <Card style={styles.dark}>
            <CardContent>
              <Typography variant='title' style={styles.lightText}>Job Satisfaction</Typography>
            </CardContent>
            <ProsCons info={career} />
          </Card>
          <Trainings career={career} />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default CareerProfile;