import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import { Redirect, withRouter } from 'react-router-dom'

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px auto',
    padding: '10px',
    width: '86vw'
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
  text: {
    color: 'rgba(0, 0, 0, 0.87)',
    marginLeft: '5px'
  }
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
    )
  }
}

export default withStyles(styles)(EnterEmail);