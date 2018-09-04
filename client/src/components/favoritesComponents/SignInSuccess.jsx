import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

class SignInSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <DialogTitle>
          {'You are Signed In'}
        </DialogTitle>
        <DialogContent>
          <Typography variant='body1'>We'll update your Favorites List.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SignInSuccess;