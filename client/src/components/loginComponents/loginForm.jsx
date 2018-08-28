import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 0px',
    padding: '10px',
    width: '90vw'
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
  error: {
    marginBottom: '20px'
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <Typography variant="headline">
        Welcome!
        </Typography>
        <Typography variant='body1' className={classes.extraSpace}>
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
            type="password"
            name="password"
            placeholder="Password"
            disableUnderline={true}
            className={classes.inputStyle}
            onChange={this.props.handlePasswordChange}
          />
          {this.props.showError ? 
            (<Typography variant="body1" align="left" color="secondary" className={classes.error}>
              Them email address and password you entered <br />
              did not match any KeyUp accounts. <br />
              Please try again.
            </Typography>  
            ) : null
          }
          <Typography variant="body1" align="center">
            <a href='#' className={classes.link}>
          Forgot your password?
            </a>
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
    );
  }
}



export default withStyles(styles)(LoginForm);