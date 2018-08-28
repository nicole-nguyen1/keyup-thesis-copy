import React from 'react';
import CreatePassword from './CreatePassword.jsx';
import { Redirect, withRouter } from 'react-router-dom'
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../../actions/action';
import { createApolloFetch } from 'apollo-fetch';

class CreatePasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);
    this.state = {
      buttonStatus: true,
      password: '',
      passwordConfirm: '',
      passCheck: false,
      passConfirmCheck: false
    }
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Create New Password'));
  }

  handleChange = (e) => {
    let thisState = {};
    thisState[e.target.name] = e.target.value;
    this.setState(thisState, this.enableButton);
  }

  enableButton = () => {
    if (this.state.password && this.state.passwordConfirm) {
      if (this.state.passCheck && this.state.passConfirmCheck) {
        this.setState({
          buttonStatus: false
        });
      } else {
        this.setState({
          buttonStatus: true
        });
      }
    } else {
      this.setState({
        buttonStatus: true
      });
    }
  }

  handlePassChange = (e) => {
    this.setState({
      password: e.target.value
    }, this.checkPassword);
  }

  checkPassword = () => {
    if (this.state.password.length > 7) {
      this.setState({
        passCheck: true
      }, this.enableButton);
    } else {
      this.setState({
        passCheck: false
      }, this.enableButton);
    }
  }

  handlePassConfirmChange = (e) => {
    this.setState({
      passwordConfirm: e.target.value
    }, this.checkPasswordConfirm);
  }

  checkPasswordConfirm = (e) => {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({
        passConfirmCheck: true
      }, this.enableButton);
    } else {
      this.setState({
        passConfirmCheck: false
      }, this.enableButton);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CreatePassword 
          handlePassChange={this.handlePassChange}
          handlePassConfirmChange={this.handlePassConfirmChange}
          checkPassword={this.checkPassword}
          checkPasswordConfirm={this.checkPasswordConfirm}
          passCheck={this.state.passCheck}
          passwordConfirm={this.state.passwordConfirm}
          passConfirmCheck={this.state.passConfirmCheck}
          email={this.state.email}
          buttonStatus={this.state.buttonStatus}
          showError={this.state.showError}
        />
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatePasswordContainer);