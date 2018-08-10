import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findCareers } from '../actions/action';
import Career from './Career.jsx';

class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.careers.map((career, index) => {
        return <Career key={index} career={career} />;
      })
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Careers);
