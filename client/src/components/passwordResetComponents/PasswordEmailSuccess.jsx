import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
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
  message: {
    width: '320px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '500px'
    }
  },
});

class PasswordEmailSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    if (this.props.router.location.state && this.props.router.location.state.email) {
      this.setState({ email: this.props.router.location.state.email});
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.message}>
          <Typography variant="headline" paragraph>
            Message Sent
          </Typography>
          <div>
            <Typography variant="body1" paragraph>
              If {this.state.email} exists in our system, we've just sent you a
              password reset link via email.
            </Typography>
            <Typography variant="body1" paragraph>
              If you don't receive an email, check your spam folder or contact customer service
            at <a href='mailto:maryhannah.duhon@keyup.services' className={classes.link}>maryhannah.duhon@keyup.services</a>.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PasswordEmailSuccess);