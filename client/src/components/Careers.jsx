import React from 'react';

class Careers extends React.Component {
  constructor(props) {
    super(props);
    this.testArray = [
      'Brian', 
      'is', 
      'cool'
    ]
  }

  render() {
    return (
      this.testArray.map((string, index) => {
        return <div key={index}>{string}</div>
      })
    )
  }
}

export default Careers