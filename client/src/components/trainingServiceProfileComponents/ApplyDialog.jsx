import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import MultiLineParagraph from '../MultiLineParagraph.jsx';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function ApplyOnline(props) {
  return <Button onClick={props.toggleDialog} href={props.service.app_url} style={{ color: '4e74ff' }}>GO TO APPLICATION</Button>
}

function ApplyPhone(props) {
  let phone = `tel:${props.service.phone_number}`
  return (
    <Button href={phone} 
      style={{
        width: '32px',
        display: 'block',
        bottom: '16px'
      }}>
      <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Phone-blue.png' 
        style={{
          height: '1.5em',
          paddingBottom: '10px'
        }}/>
      <span style={{ color: '4e74ff' }}>CALL</span>
    </Button>
  )
}

function ConditionalButton(props) {
  if (props.service.app_type === 'online') {
    return <ApplyOnline service={props.service}/>
  } else if (props.service.app_type === 'phone') {
    return <ApplyPhone service={props.service} />
  } else {
    return null;
  }
}

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
    heading = 'Apply in Person'
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
              <div className={classes.phone}>
                <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Phone-blue.png' className={classes.phoneIcon} />
                <Typography variant='body1'>{props.service.app_phone_number}</Typography>
              </div> : null}
        </DialogContent>
        <DialogActions>
          <ConditionalButton service={props.service}/>
          <Button onClick={props.toggleDialog} className={classes.cancelButton}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(AlertDialogSlide);
