import React from 'react';
import ConditionalApplyDialogButton from './ConditionalApplyDialogButton.jsx';
import MultiLineParagraph from '../reusableComponents/MultiLineParagraph.jsx';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, Slide, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
};

const styles = theme => ({
  phone: {
    margin: '20px 0',
    display: 'inline-flex'
  },

  phoneIcon: {
    height: '1.5em',
    marginRight: '20px'
  },

  cancelButton: {
    color: '#000'
  }
});

const AlertDialogSlide = props => {
  const { classes } = props;

  let heading = '';
  if (props.service.app_type === 'online') {
    heading = 'Apply Online';
  } else if (props.service.app_type === 'phone') {
    heading = 'Apply by Phone';
  } else if (props.service.app_type === 'in person') {
    heading = 'Apply in Person';
  }

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{heading}</DialogTitle>
        <DialogContent>
          {props.service.apply_now_cta ? <MultiLineParagraph text={props.service.apply_now_cta} /> : props.service.apply_now_cta}
          {props.service.app_type === 'in person' ? 
            (<div className={classes.phone}>
              <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Phone-blue.png' className={classes.phoneIcon} />
              <Typography variant='body1'>{props.service.app_phone_number}</Typography>
            </div>) : null}
        </DialogContent>
        <DialogActions>
          <ConditionalApplyDialogButton service={props.service}/>
          <Button onClick={props.toggleDialog} className={classes.cancelButton}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(AlertDialogSlide);
