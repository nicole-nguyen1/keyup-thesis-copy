import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
          name
        }
      }`
    }).then(res => {
      console.log('res data in app file in graphql request', res.data);
    });
  }

  render() {
    return (

      <div>
        <NavBar />
        <Careers careers={this.props.careers} />
      </div>
    )
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
