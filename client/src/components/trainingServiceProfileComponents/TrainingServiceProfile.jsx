import React from 'react';
import Intro from './Intro.jsx';
import Financial from './Financial.jsx';

class TrainingServiceProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <Intro service={this.props.service}/>
        <Financial service={this.props.service}/>
      </div>
    );
  }
}

export default TrainingServiceProfile;