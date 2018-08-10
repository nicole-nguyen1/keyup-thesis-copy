import React from 'react';

class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.career.name}</div>
    );
  }
} 

export default Career;