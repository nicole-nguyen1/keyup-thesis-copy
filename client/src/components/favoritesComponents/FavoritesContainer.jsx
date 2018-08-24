import React from 'react';
import Favorites from './Favorites.jsx';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle, findUser } from '../../actions/action';

class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {

  // }

  render() {
    return <Favorites userId={this.props.user_id}/>
  }
}

const mapStateToProps = state => {
  return {
    user_id: state.user.id
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ getPageTitle, findUser }, dispatch);
// };

export default connect(mapStateToProps)(FavoritesContainer);