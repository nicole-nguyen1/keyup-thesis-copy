import React from 'react';
// import { render } from 'react-dom';
// import { connect } from 'react-redux';

class Careers extends React.Component {
  constructor(props) {
    super(props);
    this.testArray = [
      'Brian', 
      'is', 
      'cool'
    ]
    // this.state = {

    // }
  }

  render() {
    return (
      this.testArray.map((string, index) => {
        return <div key={index}>{string}</div>
      })
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     examplePropOne: '',
//     examplePropTwo: ''
//   } 
    
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ exampleAction }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Careers);

export default Careers