import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  main: {
    [theme.breakpoints.up('sm')]: {
      display: 'table',
      width: '600px',
      margin: '35px auto'
    }
  },

  background: {
    padding: '25px 15px',
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'bottom'
    }
  },

  section: {
    paddingBottom: '30px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'bottom',
      textAlign: 'left'
    }
  },

  item: {
    color: '88888A',
    paddingRight: '10px'
  },

  account: {
    padding: '20px 0',
    textAlign: 'left'
  },

  buttonSection: {
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#4469FF',
    borderRadius: '0',
    [theme.breakpoints.up('sm')]: {
      width: '290px'
    }
  },

  buttonDiv: {
    display: 'inline-block'
  },

  buttonText: {
    color: '#FFFFFF',
    textDecoration: 'none'
  },

  imageDiv: {
    width: '100px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '150px'
    }
  },

  image: {
    padding: '20px 0',
    width: '100px',
    [theme.breakpoints.up('sm')]: {
      height: '100px',
      width: 'auto'
    }
  }
});

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.background}>
          <Typography variant='title'>Account Information</Typography>
          <div className={classes.section}>
            <div className={classes.account}>
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
              {this.props.user.zip ?
                <Typography variant='body1'>
                  <span className={classes.item}>Zip Code:</span>{this.props.user.zip}
                </Typography> :
                <Typography variant='body1'>
                  <span className={classes.item}>Zip Code (optional):</span>
                </Typography>
              }
            </div>
            <div className={classes.buttonDiv}>
              <Button variant='contained' color='primary' className={classes.button}>
                <Link to={{ pathname: '/profile/edit', state: { user: this.props.user } }}
                  className={classes.buttonText}
                >Edit Account Info</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.background}>
          <Typography variant='title'>Password</Typography>
          <div className={classes.section}>
            <div className={classes.imageDiv}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Password-Logo-black.png' className={classes.image} />
            </div>
            <div className={classes.buttonDiv}>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
              >
                <Link to={{ pathname: '/password/request', state: { user: this.props.user } }}
                  className={classes.buttonText}
                >Reset Password</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AccountInfo);