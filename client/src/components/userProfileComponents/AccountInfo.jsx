import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  background: {
    padding: '25px 15px'
  },

  section: {
    padding: '20px 15px'
  },

  item: {
    color: '88888A',
    paddingRight: '10px'
  },

  buttonSection: {
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#4469FF',
    borderRadius: '0'
  },

  buttonText: {
    color: '#FFFFFF',
    textDecoration: 'none'
  },

  password: {
    textAlign: 'center',
    padding: '20px'
  }
});

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.background}>
          <Typography variant='title'>Account Information</Typography>
          <div className={classes.section}>
            <Typography variant='body1'>
              <span className={classes.item}>First Name:</span>{this.props.user.first_name}
            </Typography>
            <Typography variant='body1'>
              <span className={classes.item}>Last Name:</span>{this.props.user.last_name}
            </Typography>
            <Typography variant='body1'>
              <span className={classes.item}>Email:</span>{this.props.user.email}
            </Typography>
            {this.props.user.phone_number ? 
              <Typography variant='body1'>
                <span className={classes.item}>Phone Number:</span>{this.props.user.phone_number}
              </Typography> : 
              <Typography variant='body1'>
                <span className={classes.item}>Phone Number (optional):</span>
              </Typography>
            }
            {this.props.user.zip_code ? 
              <Typography variant='body1'>
                <span className={classes.item}>Zip Code:</span>{this.props.user.zip_code}
              </Typography> : 
              <Typography variant='body1'>
                <span className={classes.item}>Zip Code (optional):</span>
              </Typography>
            }
          </div>
          <div className={classes.buttonSection}>
            <Button variant='contained' color='primary' className={classes.button}>
              <Link to={{ pathname: '/profile/edit', state: { user: this.props.user }}}
                className={classes.buttonText}
              >Edit Account Info</Link>
            </Button>
          </div>
        </div>
        <div className={classes.background}>
          <Typography variant='title'>Password</Typography>
          <div className={classes.password}>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
            >Reset Password</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AccountInfo);