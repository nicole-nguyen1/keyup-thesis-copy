import React from 'react';
import { withRouter } from 'react-router-dom';
import { store } from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle, findUser } from '../actions/action';
import { createApolloFetch } from 'apollo-fetch';
import { loginData } from '../components/graphql/graphql';
import LoginForm from '../components/loginComponents/loginForm.jsx';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);
    this.state = {
      email: '',
      password: '',
      buttonStatus: true,
      toHome: false,
      showError: false,
      redirectLoginSuccess: false,
      redirectSignUpSuccess: false
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Sign In'));
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    }, this.enableButton);
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    }, this.enableButton);
  }

  enableButton = () => {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({
        buttonStatus: false
      });
    } else {
      this.setState({
        buttonStatus: true
      });
    }
  }

  submitForm = () => {
    const formArguments = {
      email: JSON.stringify(this.state.email),
      password: JSON.stringify(this.state.password)
    };
    this.fetch({
      query: loginData(formArguments)
    }).then((res) => {
      if (!res.errors) {
        this.setState({
          email: '',
          password: '',
          buttonStatus: true
        });
        return res;
      } else {
        this.setState({
          showError: true
        });
      }
    }).then((res) => {
      if (!res.errors) {
        localStorage.setItem('jwt', res.data.login.token);
        this.props.history.goBack();
        // if (this.props.location.state.loginFromFaves) {
        //   this.setState({ redirectLoginSuccess: true });
        // } else if (this.props.location.state.createAccountFromFaves) {
        //   this.setState({ redirectSignUpSuccess: true });
        // } else {
        //   this.props.history.goBack();
        // }
      }
    }).catch(console.error);
  }

  render() {

    if (this.state.redirectLoginSuccess === true) {
      return (<Redirect to={{ pathname: '/profile', state: { updatedInfo: true } }} />);
    }

    return (
      <div>
        <LoginForm 
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          submitForm={this.submitForm} 
          email={this.state.email} 
          password={this.state.password}
          buttonStatus={this.state.buttonStatus}
          showError={this.state.showError}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages.page,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle, findUser }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));