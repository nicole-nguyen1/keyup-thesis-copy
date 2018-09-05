import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, FormControl, Input, Typography } from '@material-ui/core';

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
    height: '100vh',
    borderRadius: 0
  },
  text: {
    color: 'rgba(0, 0, 0, 0.87)',
    marginLeft: '5px'
  },
  formStyle: {
    width: '320px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '500px'
    }
  },
});

class EnterEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    if (this.props.redirect === true) {
      return (<Redirect to={{ pathname: '/password/email-sent', state: { email: this.props.email } }} />);
    }

    return (
      <div className={classes.paper}>
        <div className={classes.formStyle}>
          {!this.props.showError ?
            <Typography variant="body1" paragraph>
              Please enter your email address. We'll email you a link to reset your password.
            </Typography> :
            <div>
              <Typography variant="body1" color="secondary" paragraph>
                Please enter a valid email address.
                <span className={classes.text}>We'll email you a link to reset your password.</span>
              </Typography>
            </div>
          }
          <FormControl>
            <Input
              type="text"
              name="email"
              placeholder="Email Address"
              disableUnderline={true}
              className={classes.inputStyle}
              onChange={this.props.handleEmailChange}
            />
            <div>
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={this.props.submitForm}
                disabled={this.props.buttonStatus}
              >
                Continue
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EnterEmail);