import React from 'react';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

const SubmissionError = (props) => {  
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Message Error'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please make sure all fields are filled in before submitting
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

export default SubmissionError;
