import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 0px',
    padding: '10px'
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="headline">
        This works
        </Typography>
        <Typography variant='body1'>
          Sign in to access your KeyUp account
        </Typography>
        <FormControl style={{ width: '98%' }}>
          <Input
            type="text"
            name="email"
            placeholder="Email address"
            disableUnderline={true}
            className={classes.inputStyle}
            onChange={() => console.log('the email input field is changing!')}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            disableUnderline={true}
            className={classes.inputStyle}
            onChange={() => console.log('the password input field is changing!')}
          />
        </FormControl>
      </div>
    );
  }
}



export default withStyles(styles)(LoginForm);