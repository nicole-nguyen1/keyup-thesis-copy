import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Filter from '../filterAndSortComponents/Filter.jsx';

const styles = theme => ({
  cardStyle: {
    backgroundColor: 'EDEDEE',
    borderRadius: '0'
  },
  cardContentStyle: {
    maxWidth: '400px',
    margin: '0 auto'
  },
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 0px',
    padding: '10px'
  },
  buttonStyle: {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 0,
    marginTop: '1em'
  }
});

class QualifyForm extends React.Component {
  constructor(props) {
    super(props);
    this.labels = [
      'Financial aid',
      'The application process',
      `Talk to a grad of ${this.props.service.name}`,
      `Talk to a working ${this.props.service.career_name}`,
      'Other'
    ];
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Card className={classes.cardStyle}>
        <CardContent className={classes.cardContentStyle}>
          <Typography variant="headline" gutterBottom>
            Chat with one of our
            <br />
            KeyUp Guides Today
          </Typography>
          <Typography gutterBottom>
            We'll get back to you within 24 hours
          </Typography>
          <FormControl style={{ width: '98%' }}>
            <Input
              type="text"
              name="name"
              placeholder="Your name?"
              disableUnderline={true}
              className={classes.inputStyle}
              onChange={this.props.handleChange}
            />
            <Input
              type="text"
              name="emailOrPhone"
              placeholder="Email Address or Phone Number?"
              disableUnderline={true}
              className={classes.inputStyle}
              onChange={this.props.handleChange}
            />
            {this.labels.map((label, index) => {
              return <Filter 
                key={index} 
                label={label}
                setFilter={this.props.setCheckbox}
                id={String(index)}
              />;
            })}
            <Input
              type="text"
              name="message"
              placeholder="Ask a question or tell us a little about your career interests and priorities..."
              disableUnderline={true}
              multiline
              rows="4"
              className={classes.inputStyle}
              onChange={()=>{
                this.props.handleChange;
                this.props.enableButton;
              }}
            />
          </FormControl>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained" 
              className={classes.buttonStyle}
              onClick={this.props.submitForm}
              disabled={this.props.buttonStatus}
            >
              GET ADVICE
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(QualifyForm);
