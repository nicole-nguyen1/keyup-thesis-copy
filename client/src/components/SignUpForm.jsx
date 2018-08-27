import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import { store } from '../store/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPageTitle, findUser } from '../actions/action.js';
import { signUp } from './graphql/graphql.js';
import { createApolloFetch } from 'apollo-fetch';
import { Redirect } from 'react-router';


const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '89vw',
    maxWidth: '350px'
  },
  buttonStyle: {
    backgroundColor: '##4469FF',
    color: 'white',
    borderRadius: 0,
    marginTop: '2em'
  },
  paper: {
    top: '56px',
    backgroundColor: 'EDEDEE',
    padding: '30px 10px'
  },
  header: {
    paddingTop: '20px',
    fontWeight: 'bold'
  },
  fieldError: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '89vw',
    maxWidth: '350px',
    border: '2px solid red'
  },
  check: {
    color: 'green'
  },
  error: {
    color: 'red'
  }
});

class SignUpForm extends React.Component {
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
      passConfirmCheck: false
    }
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Create an Account'));
  }

  handleChange = (e) => {
    let thisState = {};
    thisState[e.target.name] = e.target.value;
    this.setState(thisState, this.enableButton);
  }

  enableButton = () => {
    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password && this.state.passwordConfirm) {
      if (this.state.passCheck && this.state.passConfirmCheck) {
        this.setState({
          buttonDisabled: false
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

  onSubmit = () => {
    let email = JSON.stringify(this.state.email);
    let password = JSON.stringify(this.state.password);
    let first_name = JSON.stringify(this.state.first_name);
    let last_name = JSON.stringify(this.state.last_name);
    let phone_number = JSON.stringify(this.state.phone_number);
    this.fetch({
      query: signUp({
        email,
        password,
        first_name,
        last_name,
        phone_number
      })
    })
    .then(res => {
      store.dispatch(findUser(res.data.signUp));
      this.props.history.goBack();
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.paper}>
        <Typography variant='headline'>Create an Account</Typography>
        <Typography variant='body2' className={classes.header}>Name</Typography>
        <TextField
          autoFocus
          fullWidth
          required
          type="text"
          name="first_name"
          placeholder="First Name"
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <TextField
          autoFocus
          fullWidth
          required
          type="text"
          name="last_name"
          placeholder="Last Name"
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <Typography variant='body2' className={classes.header}>Contact Information</Typography>
        <TextField
          autoFocus
          fullWidth
          required
          type="email"
          name="email"
          placeholder="Email Address"
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <TextField
          autoFocus
          fullWidth
          type="text"
          name="phone_number"
          placeholder="Phone Number (optional)"
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <Typography variant='body2' className={classes.header}>Zip Code</Typography>
        <TextField
          autoFocus
          fullWidth
          type="text"
          name="zip"
          placeholder="Zip Code (optional)"
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <Typography variant='caption'>We ask so we can recommend the training services and support programs closest to you</Typography>
        <Typography variant='body2' className={classes.header}>Password</Typography>
        <TextField
          autoFocus
          fullWidth
          required
          type="password"
          name="password"
          placeholder="Password (at least 8 characters)"
          className={classes.inputStyle}
          onChange={this.handlePassChange}
          InputProps={{
            disableUnderline: true,
            endAdornment: this.state.passCheck ? <CheckIcon className={classes.check} /> : null
          }}
        />
        <TextField
          autoFocus
          fullWidth
          required
          type="password"
          name="passwordConfirm"
          placeholder="Re-Type Password"
          className={classes.inputStyle}
          onChange={this.handlePassConfirmChange}
          InputProps={{
            disableUnderline: true,
            endAdornment: this.state.passConfirmCheck ? <CheckIcon className={classes.check} /> : this.state.passwordConfirm ? <ErrorIcon className={classes.error} /> : null
          }}
        />
        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={this.onSubmit}
          disabled={this.state.buttonDisabled}
        >
          CREATE ACCOUNT
        </Button>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUpForm));
