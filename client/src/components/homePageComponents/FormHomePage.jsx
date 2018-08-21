import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const FormHomePage = React.forwardRef((props, ref) => {
  const styles = {
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
      padding: '10px'
    },
    buttonStyle: {
      backgroundColor: '2979ff',
      borderRadius: 0,
      marginTop: '1em'
    }
  };

  return (
    <Card style={styles.cardStyle}>
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="headline" style={styles.textStyle} gutterBottom>
          Chat with one of our
          <br />
          KeyUp Guides Today
        </Typography>
        <Typography style={styles.textStyle} gutterBottom>
          We'll get back to you within 24 hours
        </Typography>
        <FormControl style={{ width: '98%' }}>
          <Input
            type="text"
            name="name"
            placeholder="Your name?"
            disableUnderline={true}
            style={styles.inputStyle}
            onChange={props.handleChange}
          />
          <Input
            type="text"
            name="emailOrPhone"
            placeholder="Email Address or Phone Number?"
            disableUnderline={true}
            style={styles.inputStyle}
            onChange={props.handleChange}
          />
          <Input
            type="text"
            name="message"
            placeholder="Ask a question or tell us a little about your career interests and priorities..."
            disableUnderline={true}
            multiline
            rows="4"
            style={styles.inputStyle}
            onChange={props.handleChange}
          />
        </FormControl>
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="contained" 
            color="primary" 
            style={styles.buttonStyle}
            onClick={props.submitForm}
          >
            GET STARTED
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

export default FormHomePage;
