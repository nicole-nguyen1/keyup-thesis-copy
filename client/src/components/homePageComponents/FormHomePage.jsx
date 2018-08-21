import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  cardStyle: {
    background: 'purple',
    borderRadius: '0'
  },
  cardContentStyle: {
    maxWidth: '400px',
    margin: '0 auto'
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
  buttonStyle: {
    backgroundColor: '2979ff',
    borderRadius: 0,
    marginTop: '1em'
  }
});

const FormHomePage = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.cardStyle}>
      <CardContent className={classes.cardContentStyle}>
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
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="contained" 
            color="primary" 
            className={classes.buttonStyle}
            onClick={props.submitForm}
          >
            GET STARTED
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(FormHomePage);
