import React from 'react';
import axios from 'axios';
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
    this.state = {
      name: '',
      emailOrPhone: '',
      email: '',
      phone: '',
      message: '',
      messageSent: false
    }

    this.submitForm = this.submitForm.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'emailOrPhone') {
      if ((this.state.emailOrPhone).includes('@')) {
        this.setState({ 
          email: e.target.value,
          phone: ''
        });
      } else {
        this.setState({ 
          phone: e.target.value,
          email: ''
        });
      }
    }
  }

  async submitForm(e) {
    e.preventDefault();
    const { name, email, phone, message } = this.state;
    const form = await axios.post('/api/form', { name, email, phone, message });
    if (form.status === 200) {
      this.setState({ messageSent: true });
    }
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Card className={classes.cardStyle}>
        <CardContent className={classes.cardContentStyle}>
          {!this.state.messageSent ? 
            <div>
              <Typography variant="headline" className={classes.textStyle} gutterBottom>
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
                    name="name"
                    placeholder="Your name?"
                    disableUnderline={true}
                    className={classes.inputStyle}
                    onChange={this.handleChange}
                  />
                  <Input
                    type="text"
                    name="emailOrPhone"
                    placeholder="Email Address or Phone Number?"
                    disableUnderline={true}
                    className={classes.inputStyle}
                    onChange={this.handleChange}
                  />
                  <Input
                    type="text"
                    name="message"
                    placeholder="Ask a question or tell us a little about your career interests and priorities..."
                    disableUnderline={true}
                    multiline
                    rows="4"
                    className={classes.inputStyle}
                    onChange={this.handleChange}
                  />
                </FormControl>
                <div style={{ textAlign: 'center' }}>
                  <Button type='submit' variant="contained" color="primary" className={classes.buttonStyle}>
                    GET STARTED
              </Button>
                </div>
              </form>
            </div> : 
            <div>
              <Typography variant="headline" className={classes.textStyle} gutterBottom>
                Your message was successfully sent.
          </Typography>
              <Typography className={classes.textStyle} gutterBottom>
                We'll get back to you within 24 hours!
          </Typography>
            </div>
          }
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(FormHomePage);