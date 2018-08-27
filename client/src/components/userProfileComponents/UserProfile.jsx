import React from 'react';
import Header from './Header.jsx';
import ViewFavorites from './ViewFavorites.jsx';
import AccountInfo from './AccountInfo.jsx';
import { store } from '../../store/index';
import { connect } from 'react-redux';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const user = (store.getState()).user;

    return (
      <div>
        <Header user={user}/>
        <ViewFavorites user={user} />
        <AccountInfo user={user} />
      </div>
    )
  }
}

export default connect()(UserProfile);