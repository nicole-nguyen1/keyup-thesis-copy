import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Careers from './Careers.jsx';
// import { store } from '../store/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }


  }

  render() {
    return (
      <div>
        <Careers />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     examplePropOne: state.example.examplePropOne,
//     examplePropTwo: state.example.examplePropTwo
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ exampleAction, exampleActionTwo }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
