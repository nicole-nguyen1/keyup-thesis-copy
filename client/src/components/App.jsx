import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import Careers from './Careers.jsx';
import { findCareers } from '../actions/action';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import CareerProfile from './CareerProfile.jsx';
import createHashHistory from 'history/createHashHistory';

const newHistory = createHashHistory();


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
          industry_name
          name
          card_pro
          annual_salary
          training_length
          card_image_url
        }
      }`
    }).then(res => {
      console.log('res data in app file in graphql request', res.data);
      store.dispatch(findCareers(res.data));
    }).then(() => {
      console.log(store.getState());
    });
  }
  //<Careers careers={this.props.careers} />
  //<NavBar />
  render() {
    // const context = this;
    console.log('new history', newHistory)
    return (
      <Router history={newHistory} >
        <div>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/careers" render={props => {
                console.log('props', props);
                return <Careers router={props} careers={this.props.careers} />;
              }} />
              <Route path="/careers/:id" render={props => {
                return <CareerProfile router={props} />;
              }} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
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
