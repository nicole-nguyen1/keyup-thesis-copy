import React from 'react';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle, findUser } from '../../actions/action';
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
      buttonStatus: true
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Sign In'));
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    }, this.enableButton)
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    }, this.enableButton)
  }

  enableButton = () => {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({
        buttonStatus: false
      })
    } else {
      this.setState({
        buttonStatus: true
      })
    }
  }

  submitForm = () => {
    const formArguments = {
      email: JSON.stringify(this.state.email),
      password: JSON.stringify(this.state.password)
    }
    console.log(formArguments)
    this.fetch({
      query: loginData(formArguments)
    }).then((res) => {
      console.log('res', res);
      this.setState({
        email: '',
        password: '',
        buttonStatus: true
      })
      return res;
    }).then((res) => {
      store.dispatch(findUser(res.data.login))
    }).then(() => {
      console.log(store.getState())
    }).catch(err => {
      console.log(err)
    })
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
    pages: state.pages.page,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle, findUser}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);