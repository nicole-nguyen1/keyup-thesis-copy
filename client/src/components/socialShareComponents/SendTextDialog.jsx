import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import smsLink from 'sms-link';

class SendTextDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textLink: ''
    }
  }

  handleChange = (e) => {
    this.setState({ 
      textLink: smsLink({ phone: `1${e.target.value}`, body: this.props.url })
    });
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={() => this.props.handleClose('textOpen')}
          aria-labelledby="text-title"
        >
          <DialogTitle id="text-title">{"Share This Page"}</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Enter the phone number of the person you want to text. 
            </Typography>
            <Typography>
              Not sure what their number is? 
              Click the button below and you'll be able to search your contact list.
            </Typography>
            <TextField
              id="text-recipient-input"
              fullWidth
              label="Enter a phone number"
              value={this.state.phoneNum}
              onChange={this.handleChange}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.handleClose('textOpen')} color="primary">
              Cancel
            </Button>
            <a href={this.state.textLink} style={{ textDecoration: 'none' }}>
              <Button color="primary" autoFocus style={{ backgroundColor: '#4469FF', color: 'EDEDEE' }}>
                Send Text
              </Button>
            </a>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default SendTextDialog;