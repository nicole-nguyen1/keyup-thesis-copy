import React from 'react';
import Intro from './Intro.jsx';
import Financial from './Financial.jsx';
import About from './About.jsx';
import Needs from './Needs.jsx';
import ProsCons from '../careerProfileComponents/ProsCons.jsx';
import Card from '@material-ui/core/Card';

class TrainingServiceProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      dark: {
        backgroundColor: '#232E49',
        borderRadius: 0,
        padding: '5px'
      }
    };
    console.log('props', this.props);
    const service = this.props.service;
    return (
      <div>
        <Intro service={service}/>
        <About service={service}/>
        <Card style={styles.dark}>
          <ProsCons info={service} />
        </Card>
        <Financial service={service}/>
        <Card style={styles.dark}>
          <Needs service={service} />
        </Card>
      </div>
    );
  }
}

export default TrainingServiceProfile;