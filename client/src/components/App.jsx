import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import Careers from './Careers.jsx';
import { findCareers, getIndustries } from '../actions/action';
import { Switch, Route, Router } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import CareerProfile from './CareerProfile.jsx';
import Services from './Services.jsx';
import createBrowserHistory from 'history/createBrowserHistory';

const newHistory = createBrowserHistory();

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
      store.dispatch(findCareers(res.data));
    });

    this.fetch({
      query: `{
        industries {
          id
          name
        }
      }`
    }).then(res => {
      store.dispatch(getIndustries(res.data));
    });
  }
  render() {
    return (
      <Router history={newHistory} >
        <div>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/careers" render={props => {
                return <Careers router={props} careers={this.props.careers} industries={this.props.industries}/>;
              }} />
              <Route path="/careers/:id" render={props => {
                return <CareerProfile router={props} />;
              }} />
              <Route path='/services/:id' render={props => {
                return <Services router={props} />;
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
    industries: state.industries.industries,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findCareers, getIndustries }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
