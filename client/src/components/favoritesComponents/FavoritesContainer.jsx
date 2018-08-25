import React from 'react';
import Favorites from './Favorites.jsx';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../../actions/action';
import { createApolloFetch } from 'apollo-fetch';

class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);
  }

  componentDidMount() {
    store.dispatch(getPageTitle('My Favorites List'));
  }

  render() {
    return <Favorites favorites={this.props.favorites}/>
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);