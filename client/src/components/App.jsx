import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Careers from './Careers.jsx';
import { findCareers } from '../actions/action';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Careers careers={this.props.careers} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    careers: state.careers.careers,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findCareers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
