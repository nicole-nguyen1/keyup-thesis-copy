import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/action';
import Careers from './Careers.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
      }
  
      
    }
  
    render () {
        console.log(this.props)
      return (
        <div>
        <Careers/>
        <div>this is our props{this.props.examplePropOne}</div>
        </div>
      ) 
    }
  }
  
  const mapStateToProps = state => {
    return {
      examplePropOne: state.example.examplePropOne,
      examplePropTwo: state.example.examplePropTwo
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ exampleAction }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App);