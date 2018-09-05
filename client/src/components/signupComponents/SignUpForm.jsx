import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/ErrorOutline';

const styles = theme => ({
  formStyle: {
    width: '320px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '500px'
    }
  },
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '280px',
    [theme.breakpoints.up('sm')]: {
      width: '460px'
    }
  },
  buttonStyle: {
    backgroundColor: '#4469FF',
    color: 'white',
    borderRadius: 0,
    marginTop: '2em'
  },
  paper: {
    top: '56px',
    backgroundColor: 'EDEDEE',
    padding: '30px 10px',
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      height: '100vh'
    }
  },
  header: {
    paddingTop: '20px',
    fontWeight: 'bold'
  },
  fieldError: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '280px',
    [theme.breakpoints.up('sm')]: {
      width: '460px'
    },
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
    this.state = {
      inputClassName: this.props.classes.inputStyle,
      //showError: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.invalidEmail !== prevProps.invalidEmail) {
      if (this.props.invalidEmail) {
        this.setState({
          inputClassName: this.props.classes.fieldError
        });
      } else {
        this.setState({
          inputClassName: this.props.classes.inputStyle
        });
      }
    }
  } 

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.paper}>
        <div className={classes.formStyle}>
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
            onChange={this.props.handleChange}
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
            onChange={this.props.handleChange}
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
            error={this.props.invalidEmail}
            className={this.state.inputClassName}
            onChange={this.props.handleChange}
            InputProps={{
              disableUnderline: true
            }}
          />
          {this.props.invalidEmail ? <Typography color="secondary" variant="body1" gutterBottom>Please enter a valid email address.</Typography> : null}
          <TextField
            autoFocus
            fullWidth
            type="number"
            name="phone_number"
            placeholder="Phone Number (optional)"
            className={classes.inputStyle}
            onChange={this.props.handleChange}
            InputProps={{
              disableUnderline: true
            }}
          />
          <Typography variant='body2' className={classes.header}>Zip Code</Typography>
          <TextField
            autoFocus
            fullWidth
            type="number"
            name="zip"
            placeholder="Zip Code (optional)"
            className={classes.inputStyle}
            onChange={this.props.handleChange}
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
            onChange={this.props.handlePassChange}
            InputProps={{
              disableUnderline: true,
              endAdornment: this.props.passCheck ? <CheckIcon className={classes.check} /> : null
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
            onChange={this.props.handlePassConfirmChange}
            InputProps={{
              disableUnderline: true,
              endAdornment: this.props.passConfirmCheck ? <CheckIcon className={classes.check} /> : this.props.passwordConfirm ? <ErrorIcon className={classes.error} /> : null
            }}
          />
          {this.props.password !== this.props.passwordConfirm ? <Typography variant="body1" color="secondary" paragraph>The passwords do not match. Please try again.</Typography> : null}
          {/* {this.props.showError ? <Typography variant="body1" color="secondary" gutterBottom>Some required information is missing.</Typography> : null}
          <div
            onClick={() => {
              if (this.props.buttonDisabled) {
                this.props.showError();
              } 
            }}
          > */}
          <Button
            variant="contained"
            className={classes.buttonStyle}
            onClick={this.props.submitForm}
            disabled={this.props.buttonDisabled}
          >
            CREATE ACCOUNT
          </Button>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignUpForm);
