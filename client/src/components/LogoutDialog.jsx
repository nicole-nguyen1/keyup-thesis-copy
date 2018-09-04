import React from 'react';
import { Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

const LogoutDialog = (props) => {  
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Logout Successful!'}</DialogTitle>
      <DialogActions>
        <Button onClick={props.onClose} color="primary" autoFocus>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
