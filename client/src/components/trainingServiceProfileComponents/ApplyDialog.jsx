import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const AlertDialogSlide = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          How to apply:
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.service.apply_now_cta}
            <br/>
            <br/>
            {props.service.app_process}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.service.app_url ? <Button onClick={props.toggleDialog} href={props.service.app_url} color="primary">GO TO APPLICATION</Button> : null}
          <Button onClick={props.toggleDialog} color="primary">
            CLOSE
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
