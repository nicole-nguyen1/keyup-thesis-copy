import React from 'react';
import Intro from './Intro.jsx';

class TrainingServiceProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);
    const service = this.props.service;
    return (
      <Intro service={service}/>
    );
  }
}

export default TrainingServiceProfile;