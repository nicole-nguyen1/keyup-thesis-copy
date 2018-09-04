import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const FormSubmitted = (props) => {  
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Message Sent'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          One of our KeyUp Guides will get back to you within 24 hours
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary" autoFocus>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormSubmitted;
