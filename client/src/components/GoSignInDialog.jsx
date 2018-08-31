import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const styles = theme => ({
  background: {
    backgroundColor: '#CFCFCE',
    paddingBottom: '1px',
    borderRadius: '0'
  },

  grid: {
    margin: '8px auto',
    width: '97%'
  },

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
    // margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  createButtonStyle: {
    // float: 'left',
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
    padding: '0 15px',
    
    // alignSelf: 'flex-end'
  },

  cancelDiv: {
    display: 'flex',
    alignSelf: 'flex-end'
  }
});

const GoSignInDialog = (props) => {
  console.log('props', props);
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
            <Link to='/login' className={classes.link}>
              <Button
                variant="contained"
                className={classes.buttonStyle}
              >
                SIGN IN
              </Button>
            </Link>
          </div>
          <div>
            <Link to='/signup' className={classes.link}>
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