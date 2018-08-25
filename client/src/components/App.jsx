import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import Careers from './Careers.jsx';
import { findCareers, getIndustries, findUser, getFavorites } from '../actions/action';
import { Switch, Route, Router } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import ServiceListContainer from './ServiceListContainer.jsx';
import createBrowserHistory from 'history/createBrowserHistory';
import CareerProfileContainer from './CareerProfileContainer.jsx';
import TrainingServiceProfileContainer from './TrainingServiceProfileContainer.jsx';
import TermsConditions from './homePageComponents/TermsConditions.jsx';
import PrivacyPolicy from './homePageComponents/PrivacyPolicy.jsx';
import LoginContainer from './loginComponents/loginContainer.jsx';
import SignUpForm from './SignUpForm.jsx';
import UserProfileContainer from './userProfileComponents/UserProfileContainer.jsx';
import FavoritesContainer from './favoritesComponents/FavoritesContainer.jsx';
import MediaQuery from 'react-responsive';
import {
  getCareersQuery,
  getIndustriesQuery,
  filterCareersQuery,
  getLoggedInUser,
  getFavoritesQuery
} from './graphql/graphql';


const newHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
    this.sortBy = 'Highest salary';
  }

  componentDidMount() {
    this.getCareers();
    this.fetch({
      query: getIndustriesQuery
    }).then(res => {
      store.dispatch(getIndustries(res.data));
    });
  }

  getUser = () => {
    this.fetch({
      query: getLoggedInUser
    }).then(res => {
      store.dispatch(findUser(res.data.loggedInUser));
    }).then(() => {
      return store.getState();
    }).then((res) => {
      if (res.user.id.length > 0) {
        this.setState({
          showSignOutButton: true
        })
      } else {
        this.setState({
          showSignOutButton: false
        })
      }
    })
  }

  toggle = () => {
    this.setState({
      showSignOutButton: false
    });
  }
    
  componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      this.getFavorites();
    }
  }

  getCareers = () => {
    this.fetch({
      query: getCareersQuery
    })
    .then((res)=>{
      return this.sortByHighestSalary(res.data.careers);
    })
    .then(res => {
      store.dispatch(findCareers(res));
    }).catch((error) => {
      console.error(error)
    });
  }

  getFavorites = () => {
    this.fetch({
      query: getFavoritesQuery(this.props.user.id)
    })
    .then((res) => {
      store.dispatch(getFavorites(res.data));
    })
  }

  filterCareers = (args, sortBy) => {
    this.sortBy = sortBy;
    this.fetch({
      query: filterCareersQuery(args)
    })
  .then((res) => {
    if (this.sortBy === 'Shortest training length') {
      return this.sortByShortestTrainingLength(res.data.careers);
    } else if (this.sortBy === 'Most job openings') {
      return this.sortByMostJobOpenings(res.data.careers);
    } else {
      return this.sortByHighestSalary(res.data.careers);
    }
  })
    .then((res) => {
      store.dispatch(findCareers(res));
    });
  }

  sortByMostJobOpenings = (careers) => {
    let bucket = [];
    let hash = {};
    let sortedCareers = [];
    careers.forEach((career)=>{
      hash[career.id] = career;
      bucket.push([career.id, Number(career.openings.split(': ')[1].split(' ')[0].split(',').join(''))]);
    })
    bucket.sort((a,b)=>{
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      }
      return 0;
    });
    bucket.forEach((val)=>{
      sortedCareers.push(hash[val[0]]);
    });
    return {careers: sortedCareers};
  }

  sortByHighestSalary = (careers) => {
    let bucket = [];
    let hash = {};
    let sortedCareers = [];
    careers.forEach((career)=>{
      hash[career.id] = career;
      bucket.push([career.id, Number(career.annual_salary.split('$').join(',').split(',').join(''))])
    })
    bucket.sort((a,b)=>{
      if(a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      }
      return 0;
    });
    bucket.forEach((val)=>{
      sortedCareers.push(hash[val[0]]);
    });
    return {careers: sortedCareers};
  }

  sortByShortestTrainingLength = (careers) => {
    let bucket = [];
    let hash = {};
    let sortedCareers = [];
    careers.forEach((career)=>{
      hash[career.id] = career;
      bucket.push([career.id, career.training_length.split(' ')[0]]);
    });
    bucket.sort((a,b)=>{
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    })
    bucket.forEach((val)=>{
      sortedCareers.push(hash[val[0]]);
    })
    
    return {careers: sortedCareers};
  }

  render() {
    return (
      <Router history={newHistory} >
        <div>
          <NavBar toggle={this.toggle} showSignOutButton={this.state.showSignOutButton}/>
          <MediaQuery query="(min-width: 600px)">
            <div style={{ marginTop: '64px' }}>
              <Switch>
                <Route exact path="/home" render={props => {
                  return <Home 
                  router={props}
                  getUser={this.getUser}
                  />
                }} />
                <Route exact path="/terms-and-conditions" component={TermsConditions} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/signup" component={SignUpForm} />
                <Route exact path="/profile" render={props => {
                  return <UserProfileContainer
                    router={props}
                  />;
                }} />
                <Route exact path="/favorites" render={props => {
                  return <FavoritesContainer 
                    router={props}/>
                }} />
                <Route exact path="/careers" render={props => {
                  return <Careers
                    router={props}
                    careers={this.props.careers}
                    favorites={this.props.favorites}
                    industries={this.props.industries}
                    filterCareers={this.filterCareers}
                  />;
                }} />
                <Route path="/careers/:id" render={props => {
                  return <CareerProfileContainer router={props} />;
                }} />
                <Route path='/services/:id' render={props => {
                  return <ServiceListContainer router={props} />;
                }} />
                <Route path='/service/:id' render={props => {
                  return <TrainingServiceProfileContainer router={props} />;
                }} />
              </Switch>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 599px)">
            <div style={{ marginTop: '56px' }}>
              <Switch>
              <Route exact path="/home" render={props => {
                  return <Home 
                  router={props}
                  getUser={this.getUser}
                  />
                }} />
                <Route exact path="/terms-and-conditions" component={TermsConditions} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/signup" component={SignUpForm} />
                <Route exact path="/profile" render={props => {
                  return <UserProfileContainer
                    router={props}
                  />
                }} />
                <Route exact path="/favorites" render={props => {
                  return <FavoritesContainer
                    router={props} />
                }} />
                <Route exact path="/careers" render={props => {
                  return <Careers
                    router={props}
                    careers={this.props.careers}
                    industries={this.props.industries}
                    filterCareers={this.filterCareers}
                    favorites={this.props.favorites}
                  />;
                }} />
                <Route path="/careers/:id" render={props => {
                  return <CareerProfileContainer router={props} favorites={this.props.favorites} />;
                }} />
                <Route path='/services/:id' render={props => {
                  return <ServiceListContainer router={props} />;
                }} />
                <Route path='/service/:id' render={props => {
                  return <TrainingServiceProfileContainer router={props} />;
                }} />
              </Switch>
            </div>
          </MediaQuery>
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
    user: state.user.user,
    favorites: state.favorites.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findCareers, getIndustries }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
