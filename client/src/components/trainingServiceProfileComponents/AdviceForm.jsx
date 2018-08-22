import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Filter from '../filterAndSortComponents/Filter.jsx';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    backgroundColor: "transparent",
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
    maxWidth: '400px'
  }
});

class AdviceForm extends React.Component {
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
        <DialogTitle
          id="responsive-dialog-title"
          className={classes.headerStyle}
        >
          Chat with one of our
          <br />
          KeyUp Guides Today
        </DialogTitle>
        <DialogContent className={classes.formStyle}>
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
              onChange={this.props.handleChange}
            />
          </FormControl>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained" 
              className={classes.buttonStyle}
              onClick={()=>{
                this.props.submitForm();
                this.props.toggleQualifyDialog();
              }}
              disabled={this.props.buttonStatus}
            >
              GET ADVICE
            </Button>
            <Button 
              className={classes.cancelButtonStyle}
              onClick={this.props.toggleQualifyDialog}
            >
              CANCEL
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(AdviceForm);
