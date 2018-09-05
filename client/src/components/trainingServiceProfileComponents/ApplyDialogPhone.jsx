import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    width: '32px',
    display: 'block',
    bottom: '16px'
  },

  image: {
    height: '1.5em',
    paddingBottom: '10px'
  },

  span: {
    color: '4e74ff'
  }
});

const ApplyDialogPhone = (props) => {
  const { classes } = props;

  let phone = `tel:${props.service.phone_number}`;

  return (
    <Button href={phone}
      className={classes.button}>
      <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Phone-blue.png'
        className={classes.image} />
      <span className={classes.span}>CALL</span>
    </Button>
  );
};

export default withStyles(styles)(ApplyDialogPhone);