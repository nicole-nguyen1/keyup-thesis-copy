import React from 'react';
import CreatePassword from '../components/passwordResetComponents/CreatePassword.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle, findUser } from '../actions/action';
import { createApolloFetch } from 'apollo-fetch';
import { checkToken, resetPassword, getLoggedInUser } from '../components/graphql/graphql';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, Typography } from '@material-ui/core';

class CreatePasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../../graphql'
    }).bind(this);
    this.state = {
      invalidToken: false,
      buttonStatus: true,
      password: '',
      passwordConfirm: '',
      passCheck: false,
      passConfirmCheck: false,
      showError: false,
      redirect: false
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Create New Password'));
    this.checkToken();
  }

  checkToken = () => {
    let token = JSON.stringify(this.props.router.match.params.token);
    this.fetch({
      query: checkToken(token)
    })
      .then((res) => {
        if (res.errors) {
          this.setState({
            invalidToken: true
          });
        } else {
          this.setState({
            invalidToken: false
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
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

  submitForm = () => {
    const formArguments = {
      token: JSON.stringify(this.props.router.match.params.token),
      password: JSON.stringify(this.state.password)
    };

    this.fetch({
      query: resetPassword(formArguments)
    })
      .then((res) => {
        if (!res.errors) {
          return res;
        } else {
          this.setState({
            showError: true
          });
        }
      })
      .then((res) => {
        localStorage.setItem('jwt', res.data.resetPassword.token);
        return this.fetch({
          query: getLoggedInUser(JSON.stringify(res.data.resetPassword.token))
        });
      })
      .then(res => {
        store.dispatch(findUser(res.data.loggedInUser));
        this.setState({ redirect: true });
      })
      .catch((err) => {
        console.error(err);
      });
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
          submitForm={this.submitForm}
          showError={this.state.showError}
          redirect={this.state.redirect}
        />
        <Dialog 
          open={this.state.invalidToken}  
          disableBackdropClick={true} 
          disableEscapeKeyDown={true}>
          <DialogTitle>
            Your Password Reset Link Has Expired
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Please click the button below to request another password reset link to be sent via email.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              href="/password/request"
            >
              Reset Password
            </Button>
          </DialogActions>
        </Dialog>
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
  return bindActionCreators({ getPageTitle, findUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePasswordContainer);