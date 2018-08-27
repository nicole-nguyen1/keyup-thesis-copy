import React from 'react';
import Header from './Header.jsx';
import ViewFavorites from './ViewFavorites.jsx';
import AccountInfo from './AccountInfo.jsx';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedInfo: false
    }
  }

  handleClose = () => {
    this.setState({ updatedInfo: false });
  };

  componentDidMount() {
    if (this.props.router.location.state && this.props.router.location.state.updatedInfo) {
      this.setState({ updatedInfo: true});
    }
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <Header user={this.props.user}/>
        <ViewFavorites user={this.props.user} />
        <AccountInfo user={this.props.user} />
        <Dialog
          open={this.state.updatedInfo}
          onClose={this.handleClose}
        >
          <DialogTitle>
            {"Account Info Updated"}
          </DialogTitle>
          <DialogContent>
            <Typography variant='body1'>Your account information was successfully updated.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default connect()(UserProfile);