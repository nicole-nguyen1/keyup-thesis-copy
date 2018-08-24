import React from 'react';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle, findUser } from '../../actions/action';
import UserProfile from './UserProfile.jsx';

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.user);
    return <UserProfile user={this.props.user}/>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UserProfileContainer);