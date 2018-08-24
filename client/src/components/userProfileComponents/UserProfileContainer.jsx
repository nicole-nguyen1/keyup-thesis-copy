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
    return <UserProfile user={this.props.user}/>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ getPageTitle, findUser }, dispatch);
// };

export default connect(mapStateToProps)(UserProfileContainer);