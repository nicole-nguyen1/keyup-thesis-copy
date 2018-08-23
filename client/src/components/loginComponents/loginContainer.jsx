import React from 'react';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../../actions/action';
import { createApolloFetch } from 'apollo-fetch';
import { loginData } from '../graphql/graphql';
import LoginForm from './loginForm.jsx';

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
      emailStatus: false,
      passwordStatus: false
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Sign In'));
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    })
    this.setState({
      emailStatus: true
    })
    if (this.state.emailStatus && this.state.passwordStatus) {
      this.setState({
        buttonStatus: false
      })
    }
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
    this.setState({
      passwordStatus: true
    })
    if (this.state.emailStatus && this.state.passwordStatus) {
      this.setState({
        buttonStatus: false
      })
    }
  }

  handleLogin = e => {
    e.preventDefault();
  }

  submitForm = () => {
    console.log('you submitted the form with email and password!')
    console.log(this.state.email)
    console.log(this.state.password)
    // const formArguments = {
    //   email: JSON.stringify(this.state.email),
    //   password: JSON.stringify(this.state.password)
    // }
    // this.fetch({
    //   query: loginData(formArguments)
    // }).then(() => {
    //   this.setState({
    //     email: '',
    //     password: ''
    //   })
    // }).catch(err => {
    //   console.log(err)
    // })
  }

  render() {
    return (
      <div>
        <LoginForm 
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          submitForm={this.submitForm} 
          email={this.state.email} 
          password={this.state.password}
          buttonStatus={this.state.buttonStatus}
        />
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