import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { exampleAction } from './actions/action';
import Careers from './components/Careers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render () {
  return (<Careers/>) 
  }
}

const mapStateToProps = state => {
  return {
    examplePropOne: state.examplePropOne,
    examplePropTwo: state.examplePropTwo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ exampleAction }, dispatch);
}

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('app')
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
