import React from 'react';
import SignUpForm from '../components/signupComponents/SignUpForm.jsx';
import { store } from '../store/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPageTitle, findUser } from '../actions/action';
import { signUp } from '../components/graphql/graphql.js';
import { createApolloFetch } from 'apollo-fetch';

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '280px',
    [theme.breakpoints.up('sm')]: {
      width: '460px'
    }
  },
  fieldError: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '89vw',
    maxWidth: '350px',
    border: '2px solid red'
  }
});

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      zip: '',
      password: '',
      passwordConfirm: '',
      buttonDisabled: true,
      passCheck: false,
      passConfirmCheck: false,
      invalidEmail: false,
      showError: false,
      loginFromFaves: false,
      createAccountFromFaves: false
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Create an Account'));
  }

  handleChange = (e) => {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let thisState = {};
    thisState[e.target.name] = e.target.value;
    this.setState(thisState, this.enableButton);

    if (!(this.state.email).match(emailRegex)) {
      this.setState({
        invalidEmail: true
      });
    } else {
      this.setState({
        invalidEmail: false
      });
    }
  }

  enableButton = () => {
    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password && this.state.passwordConfirm) {
      if (this.state.passCheck && this.state.passConfirmCheck) {
        this.setState({
          buttonDisabled: false,
          showError: false
        });
      } else {
        this.setState({
          buttonDisabled: true
        });
      }
    } else {
      this.setState({
        buttonDisabled: true
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

  showError = () => {
    this.setState({ showError: true });
  }

  onSubmit = () => {
    let email = JSON.stringify(this.state.email);
    let password = JSON.stringify(this.state.password);
    let first_name = JSON.stringify(this.state.first_name);
    let last_name = JSON.stringify(this.state.last_name);
    let phone_number = JSON.stringify(this.state.phone_number);
    let zip = JSON.stringify(this.state.zip);
 
    this.fetch({
      query: signUp({
        email,
        password,
        first_name,
        last_name,
        phone_number,
        zip
      })
    })
      .then(res => {
        localStorage.setItem('jwt', res.data.signUp.token);
        this.props.history.goBack();
      });
  }

  render() {
    return (
      <SignUpForm
        password={this.state.password}
        passwordConfirm={this.state.passwordConfirm} 
        handleChange={this.handleChange}
        handlePassChange={this.handlePassChange}
        handlePassConfirmChange={this.handlePassConfirmChange}
        checkPassword={this.checkPassword}
        checkPasswordConfirm={this.checkPasswordConfirm}
        enableButton={this.enableButton}
        submitForm={this.onSubmit}
        invalidEmail={this.state.invalidEmail}
        inputClassName={this.state.inputClassName}
        buttonDisabled={this.state.buttonDisabled}
        passCheck={this.state.passCheck}
        passConfirmCheck={this.state.passConfirmCheck}
        showError={this.showError}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);
