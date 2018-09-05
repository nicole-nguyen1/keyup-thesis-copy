import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, FormControl, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px auto',
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
    marginTop: '5em',
    padding: '5px 30px',
    float: 'left',
    borderRadius: '2px'
  },
  link: {
    textDecoration: 'none',
    color: '#4469FF'
  },
  paper: {
    top: '56px',
    padding: '60px 15px',
    backgroundColor: 'EDEDEE',
    height: '100vh'
  },
  check: {
    color: 'green'
  },
  error: {
    color: 'red'
  },
  formStyle: {
    width: '320px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '500px'
    }
  },
});

class CreatePassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    if (this.props.redirect === true) {
      return (<Redirect to={{ pathname: '/home', state: { passwordResetSuccess: true } }} />);
    }

    return (
      <div className={classes.paper}>
        <div className={classes.formStyle}>
          <Typography variant="headline" paragraph>
            Create New Password
          </Typography>
          <Typography variant="body1" paragraph>
            Please enter your new password below.
          </Typography>
          <FormControl>
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
            <div>
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={this.props.submitForm}
                disabled={this.props.buttonStatus}
              >
                Save New Password
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePassword);