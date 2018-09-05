import React from 'react';
import MediaQuery from 'react-responsive';
import { Button, Input, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    background: 'purple',
  },
  cardStyle: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '16px',
    [theme.breakpoints.up('sm')]: {
      display: 'table'
    }
  },
  cardContentStyle: {
    maxWidth: '400px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'middle',
      padding: '40px 30px'
    }
  },
  headerStyle: {
    color: 'white'
  },
  textStyle: {
    color: 'white'
  },
  inputStyle: {
    background: 'white',
    margin: '5px 0px',
    padding: '10px',
    width: '95%'
  },
  buttonDivStyle: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  buttonStyle: {
    backgroundColor: '#4469FF',
    borderRadius: 0,
    marginTop: '1em',
  },
  imageDiv: {
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'middle',
      padding: '10% 5%'
    }
  },
  image: {
    width: '150px',
    [theme.breakpoints.up('md')]: {
      width: '225px'
    }
  }
});

const FormHomePage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.background}>
      <div className={classes.cardStyle}>
        <div className={classes.cardContentStyle}>
          <Typography variant="headline" className={classes.textStyle} gutterBottom>
            Chat with one of our
            <br />
            KeyUp Guides Today
          </Typography>
          <Typography className={classes.textStyle} gutterBottom>
            We'll get back to you within 24 hours
          </Typography>
          <form style={{ width: '98%' }}>
            <Input
              type="text"
              name="name"
              value={props.name}
              placeholder="Your name?"
              disableUnderline={true}
              className={classes.inputStyle}
              onChange={props.handleChange}
            />
            <Input
              type="text"
              name="emailOrPhone"
              value={props.emailOrPhone}
              placeholder="Email Address or Phone Number?"
              disableUnderline={true}
              className={classes.inputStyle}
              onChange={props.handleChange}
            />
            <Input
              type="text"
              name="message"
              value={props.message}
              placeholder="Ask a question or tell us a little about your career interests and priorities..."
              disableUnderline={true}
              multiline
              rows="4"
              className={classes.inputStyle}
              onChange={props.handleChange}
            />
          </form>
          <div className={classes.buttonDivStyle}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
              onClick={props.submitForm}
            >
              GET STARTED
            </Button>
          </div>
        </div>
        <MediaQuery query='(min-width: 600px)'>
          <div className={classes.imageDiv}>
            <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Colorful-Chat-Icon-for-Home-Page.png'
              className={classes.image}
            />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default withStyles(styles)(FormHomePage);
