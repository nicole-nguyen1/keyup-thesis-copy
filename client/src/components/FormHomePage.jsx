import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class FormHomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Card>
        <CardContent>
          <Typography>
            Chat with one of our
            <br />
            KeyUp Guides Today
          </Typography>
          <Typography>
            We'll get back to you within 24 hours
          </Typography>
          <TextField 
            placeholder="Your name?"
            margin="normal"
          />
          <TextField
            placeholder="Email Address or Phone Number?"
            margin="normal"
          />
          <TextField
            placeholder="Ask a question or tell us a little about your career interests and priorities..."
            margin="normal"
            multiline
            rows="4"
          />
        </CardContent>
      </Card>
    );
  }
}

export default FormHomePage;