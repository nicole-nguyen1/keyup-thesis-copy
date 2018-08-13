import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  cardStyle: {
    background: 'purple',
    borderRadius: '0'
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
    width: '300px',
  }
});

// background: '#834A8f'

class FormHomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.cardStyle}>
        <CardContent >
          <Typography variant="headline"className={classes.textStyle}>
            Chat with one of our
            <br />
            KeyUp Guides Today
          </Typography>
          <Typography className={classes.textStyle}>
            We'll get back to you within 24 hours
          </Typography>
          <TextField 
            placeholder="Your name?"
            className={classes.inputStyle}
          />
          <br />
          <TextField
            placeholder="Email Address or Phone Number?"
            className={classes.inputStyle}
          />
          <br />
          <TextField
            placeholder="Ask a question or tell us a little about your career interests and priorities..."
            multiline
            rows="4"
            className={classes.inputStyle}
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(FormHomePage);