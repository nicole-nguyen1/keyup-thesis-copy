import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 0px',
    padding: '10px',
    width: '90vw'
  },
  buttonStyle: {
    backgroundColor: '2979ff',
    color: 'white',
    borderRadius: 0,
    marginTop: '5em',
    padding: '5px 30px',
    float: 'left',
    borderRadius: '2px'
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
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            disableUnderline={true}
            className={classes.inputStyle}
            onChange={this.props.handlePasswordChange}
            required
          />
          <div>
            <Button
              variant="contained"
              className={classes.buttonStyle}
              onClick={this.props.submitForm}
              disabled={this.props.buttonStatus}
            >
        SIGN IN
            </Button>
            <Button
              className={classes.createButtonStyle}
              onClick={() => console.log('you clicked the create an account button!')}
            >
        CREATE AN ACCOUNT
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}



export default withStyles(styles)(LoginForm);