import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  popUpText: {
    color: '#88888A',
    textAlign: 'left',
    padding: '0 15px 15px'
  },

  popUpTitle: {
    padding: '20px 15px', 
    textAlign: 'left'
  },

  buttonStyle: {
    backgroundColor: '#4469FF',
    color: 'white',
    borderRadius: 0,
    padding: '5px 30px',
    borderRadius: '2px',
    marginBottom: '20px',
    textDecoration: 'none',
    outline: 'none'
  },

  buttons: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  createButtonStyle: {
    fontWeight: 'bold',
    color: '#4469FF',
    borderRadius: '2px',
    padding: '5px 30px',
    marginBottom: '10px'
  },

  link: {
    textDecoration: 'none'
  },

  cancelButton: {
    float: 'right',
    fontWeight: 'bold',
    textAlign: 'right',
    padding: '0 15px'
  },

  cancelDiv: {
    display: 'flex',
    alignSelf: 'flex-end'
  }
});

const GoSignInDialog = (props) => {
  const { classes } = props;

  return (
    <Dialog open={props.open} maxWidth={'xs'}>
      <DialogTitle className={classes.popUpTitle}>
        {'Sign In or Create Account'}
      </DialogTitle>
      <DialogContent className={classes.popUpText}>
        <Typography variant='body1'>
          Sign in or create an account to save your favorite career and training options.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.buttons}>
        <div >
          <div>
            <Link to={{ 
              pathname: '/login',
              state: { loginFromFaves: true, page: props.page } 
            }} 
            className={classes.link}>
              <Button
                variant="contained"
                className={classes.buttonStyle}
              >
                SIGN IN
              </Button>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname: '/signup',
              state: { createAccountFromFaves: true, page: props.page }
            }} 
            className={classes.link}>
              <Button
                className={classes.createButtonStyle}
              >
                CREATE AN ACCOUNT
              </Button>
            </Link>
          </div>
        </div>
        <div className={classes.cancelDiv}>
          <Button onClick={props.onClose} className={classes.cancelButton}>
            CANCEL
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(GoSignInDialog);