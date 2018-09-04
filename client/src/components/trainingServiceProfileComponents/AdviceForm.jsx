import React from 'react';
import Filter from '../filterAndSortCareerComponents/Filter.jsx';
import { Button, Dialog, DialogContent, DialogTitle, FormControl, Input, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 0px',
    padding: '10px'
  },
  buttonStyle: {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 0,
    marginTop: '2em',
    float: 'left'
  },
  cancelButtonStyle: {
    float: 'left',
    marginTop: '2em',
    marginLeft: '1em',
    fontWeight: 'bold'
  },
  form: {
    top: '56px'
  },

  backdrop: {
    backgroundColor: 'transparent',
    top: '56px'
  },

  paper: {
    backgroundColor: 'EDEDEE'
  },

  headerStyle: {
    textAlign: 'left',
    fontWeight: 'bold'
  },
  formStyle: {
    width: '360px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '500px'
    }
  }
});

class AdviceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [
        'Financial aid',
        'The application process',
        `Talk to a grad of ${this.props.service.name}`,
        `Talk to a working ${this.props.service.career_name}`,
        'Other'
      ]
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.service !== prevProps.service) {
      this.setState({
        labels: [
          'Financial aid',
          'The application process',
          `Talk to a grad of ${this.props.service.name}`,
          `Talk to a working ${this.props.service.career_name}`,
          'Other'
        ]
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        fullScreen
        open={this.props.dialogState}
        className={classes.form}
        BackdropProps={{
          classes: {
            root: classes.backdrop
          }
        }}
        PaperProps={{
          classes: {
            root: classes.paper
          }
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <div className={classes.formStyle}>
          <DialogTitle
            id="responsive-dialog-title"
            className={classes.headerStyle}
          >
            Chat with one of our
            <br />
            KeyUp Guides Today
          </DialogTitle>
          <DialogContent>
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
              {this.state.labels.map((label, index) => {
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
                onChange={this.props.handleChange}
              />
            </FormControl>
            <div style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={() => {
                  this.props.submitForm();
                  this.props.toggleAdviceForm();
                }}
                disabled={this.props.buttonStatus}
              >
                GET ADVICE
              </Button>
              <Button
                className={classes.cancelButtonStyle}
                onClick={this.props.toggleAdviceForm}
              >
                CANCEL
              </Button>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(AdviceForm);
