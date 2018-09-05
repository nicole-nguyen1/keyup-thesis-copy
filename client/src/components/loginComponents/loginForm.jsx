import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, FormControl, Input, Typography } from '@material-ui/core';

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
    margin: '5px 0px',
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
  buttons: {
    margin: '0 auto'
  },
  link: {
    textDecoration: 'none',
    color: '#4469FF'
  },
  paper: {
    top: '56px',
    padding: '60px 10px',
    backgroundColor: 'EDEDEE',
    height: '100vh'
  },
  extraSpace: {
    marginTop: '30px'
  },
  createButtonStyle: {
    float: 'left',
    marginTop: '5em',
    marginLeft: '1em',
    fontWeight: 'bold'
  },
  smallText: {
    marginBottom: '20px',
    marginTop: '8px'
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.props.submitForm();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.formStyle}>
          <Typography variant="headline" paragraph>
            Welcome!
          </Typography>
          <Typography variant='body1' className={classes.extraSpace} gutterBottom>
            Sign in to access your KeyUp account
          </Typography>
          <FormControl>
            <Input
              type="text"
              name="email"
              placeholder="Email Address"
              disableUnderline={true}
              className={classes.inputStyle}
              onChange={this.props.handleEmailChange}
            />
            <Input
              onKeyPress={this.handleEnterPress}
              type="password"
              name="password"
              placeholder="Password"
              disableUnderline={true}
              className={classes.inputStyle}
              onChange={this.props.handlePasswordChange}
            />
            {this.props.showError ?
              (<Typography variant="body1" align="left" color="secondary" className={classes.smallText}>
                The email address and password you entered <br />
                did not match any KeyUp accounts. <br />
                Please try again.
              </Typography>
              ) : null
            }
            <Typography variant="body1" align="center" className={classes.smallText}>
              <Link to='/password/request' className={classes.link}>
                Forgot your password?
              </Link>
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={this.props.submitForm}
                disabled={this.props.buttonStatus}
              >
                SIGN IN
              </Button>
              <Link to='/signup'>
                <Button
                  className={classes.createButtonStyle}
                >
                  CREATE AN ACCOUNT
                </Button>
              </Link>
            </div>
          </FormControl>
        </div>
      </div>
    );
  }
}



export default withStyles(styles)(LoginForm);