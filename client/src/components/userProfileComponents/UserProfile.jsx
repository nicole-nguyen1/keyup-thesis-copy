import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import ViewFavorites from './ViewFavorites.jsx';
import AccountInfo from './AccountInfo.jsx';
import { connect } from 'react-redux';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core';
import { store } from '../../store/index';
import { getPageTitle } from '../../actions/action';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedInfo: false
    };
  }

  handleClose = () => {
    this.setState({ updatedInfo: false });
  };

  componentDidMount() {
    store.dispatch(getPageTitle('My Profile'));
    if (this.props.router.location.state && this.props.router.location.state.updatedInfo) {
      this.setState({ updatedInfo: true});
    }
    this.props.getUser();
  }

  render() {
    const token = localStorage.getItem('jwt');
    if (token === null) {
      return (<Redirect to={{ pathname: '/home'}} />);
    }
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
            {'Account Info Updated'}
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
    );
  }
}

export default connect()(UserProfile);