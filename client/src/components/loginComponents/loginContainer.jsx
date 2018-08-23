import React from 'react';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../../actions/action';
import LoginForm from './loginForm.jsx';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Sign In'));
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages.page
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);