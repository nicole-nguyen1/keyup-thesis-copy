import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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
    padding: '10px'
  },
  buttonStyle: { 
    backgroundColor: '2979ff',
    borderRadius: 0,
    marginTop: '1em' 
  }
});

class FormHomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm = (e) => {

  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.cardStyle}>
        <CardContent className={classes.cardContentStyle}>
          <Typography variant="headline"className={classes.textStyle} gutterBottom>
            Chat with one of our
            <br />
            KeyUp Guides Today
          </Typography>
          <Typography className={classes.textStyle} gutterBottom>
            We'll get back to you within 24 hours
          </Typography>
          <form onSubmit={this.submitForm} style={{ marginBottom: 0 }}>
            <FormControl style={{ width: '98%' }}>
              <Input
                type="text"
                placeholder="Your name?"
                disableUnderline={true}
                className={classes.inputStyle}
              />
              <Input
                type="text"
                placeholder="Email Address or Phone Number?"
                disableUnderline={true}
                className={classes.inputStyle}
              />
              <Input
                type="text"
                placeholder="Ask a question or tell us a little about your career interests and priorities..."
                disableUnderline={true}
                multiline
                rows="4"
                className={classes.inputStyle}
              />
            </FormControl>
            <div style={{ textAlign: 'center' }}>
              <Button type='submit' variant="contained" color="primary" className={classes.buttonStyle}>
                GET STARTED
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(FormHomePage);