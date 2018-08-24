import React from 'react';
import Favorites from './Favorites.jsx';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFavorites } from '../../actions/action';
import { createApolloFetch } from 'apollo-fetch';
import { getFavoritesQuery } from '../graphql/graphql';

class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);
  }

  componentDidMount() {
    this.fetch({
      query: getFavoritesQuery(this.props.user_id)
    })
    .then((res) => {
      console.log(res);
      store.dispatch(getFavorites(res.data));
    })
  }

  render() {
    return <Favorites favorites={this.props.favorites}/>
  }
}

const mapStateToProps = state => {
  return {
    user_id: state.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFavorites }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);