import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import Careers from './Careers.jsx';
import { findCareers } from '../actions/action';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: './graphql'
    }).bind(this);
    
  }

  componentDidMount() {
    this.fetch({
      query: `{
        careers {
          id
          industry_id
          name
          annual_salary
          training_length
          description
          openings
          training_hours
          training_cost
          card_image_url
          card_pro
          profile_image_url
          hourly_pay
          video_url
        }
      }`
    }).then(res => {
      console.log('res data in app file in graphql request', res.data);
      store.dispatch(findCareers(res.data));
    }).then(() => {
      console.log(store.getState());
    });
  }

  render() {
    return (

      <div>
        <Careers careers={this.props.careers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    careers: state.careers.careers,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findCareers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
