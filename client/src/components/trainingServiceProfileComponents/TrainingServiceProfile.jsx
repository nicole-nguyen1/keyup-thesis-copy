import React from 'react';
import Intro from './Intro.jsx';
import Financial from './Financial.jsx';
import About from './About.jsx';

class TrainingServiceProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);
    const service = this.props.service;
    return (
      <div>
        <Intro service={service}/>
        <About service={service}/>
        <Financial service={service}/>
      </div>
    )
  }
}

export default TrainingServiceProfile;