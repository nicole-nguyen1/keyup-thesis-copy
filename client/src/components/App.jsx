import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import { withStyles } from '@material-ui/core/styles';
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
import UserProfile from './userProfileComponents/UserProfile.jsx';
import Favorites from './favoritesComponents/Favorites.jsx';
import EditAccountForm from './userProfileComponents/EditAccountInfoForm.jsx';
import EnterEmailContainer from './passwordResetComponents/EnterEmailContainer.jsx';
import PasswordEmailSuccess from './passwordResetComponents/PasswordEmailSuccess.jsx';
import CreatePasswordContainer from './passwordResetComponents/CreatePasswordContainer.jsx';
import {
  getCareersQuery,
  getIndustriesQuery,
  filterCareersQuery,
  getLoggedInUser,
  getFavoritesQuery,
  addFavoriteToList,
  removeFavoriteFromList
} from './graphql/graphql';
import { Paper } from '@material-ui/core';

const newHistory = createBrowserHistory();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
    this.sortBy = 'Highest salary';
    this.state = {
      showSignOutButton: false,
      showAccountInfo: false,
      showProfile: false,
      showFavorites: false
    }
  }

  componentDidMount() {
    this.getUser()
    this.getCareers();
    this.fetch({
      query: getIndustriesQuery
    }).then(res => {
      store.dispatch(getIndustries(res.data));
    });
  }

  getUser = () => {
    let token = localStorage.getItem('jwt');
    if (token) {
      token = JSON.stringify(token);
      this.fetch({
        query: getLoggedInUser(token)
      })
      .then(res => {
        store.dispatch(findUser(res.data.loggedInUser))
      })
      this.getFavorites(token)
      this.setState({
        showSignOutButton: true,
        showAccountInfo: true,
        showProfile: true,
        showFavorites: true
      })
    } else {
      this.setState({
        showSignOutButton: false,
        showAccountInfo: false,
        showProfile: false,
        showFavorites: false
      })
    }
  }

  toggle = () => {
    this.setState({
      showSignOutButton: false,
      showAccountInfo: false,
      showProfile: false,
      showFavorites: false
    });
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

  getFavorites = (token) => {
    this.fetch({
      query: getFavoritesQuery(token || null)
    })
    .then((res) => {
      store.dispatch(getFavorites(res.data));
    });
  }

  addFavorite = (args) => {
    args.token = JSON.stringify(localStorage.getItem('jwt'));
    this.fetch({
      query: addFavoriteToList(args)
    })
    .then(()=> {
      this.getFavorites(args.token);
    })
  }

  removeFavorite = (favoriteID) => {
    this.fetch({
      query: removeFavoriteFromList(favoriteID)
    })
    .then(()=> {
      this.getFavorites(JSON.stringify(localStorage.getItem('jwt')));
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
    const { classes } = this.props;
    return (
      <Router history={newHistory} >
        <div>
          <NavBar 
          toggle={this.toggle} 
          showSignOutButton={this.state.showSignOutButton} 
          showAccountInfo={this.state.showAccountInfo}
          showProfile={this.state.showProfile}
          showFavorites={this.state.showFavorites}
          getUser={this.getUser}
          user={this.props.user}
          />
            <Paper className={classes.root}>
              <Switch>
                <Route exact path="/home" render={props => {
                  return <Home 
                  router={props}
                  getUser={this.getUser}
                  getFavorites={this.getFavorites}
                  />
                }} />
                <Route exact path="/terms-and-conditions" component={TermsConditions} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/signup" component={SignUpForm} />
                <Route exact path='/password/request' component={EnterEmailContainer}/>
                <Route exact path='/password/email-sent' render={props => {
                  return <PasswordEmailSuccess router={props} />
                }}/>
                <Route path='/password/reset/:token' render={props => {
                  return <CreatePasswordContainer router={props} />
                }} />
                <Route exact path="/profile" render={props => {
                  return <UserProfile
                    router={props}
                    getUser={this.getUser}
                    user={this.props.user.user}
                  />;
                }} />
                <Route exact path="/profile/edit" render={props => {
                  return <EditAccountForm
                    router={props}
                    getUser={this.getUser}
                    user={this.props.user.user}
                  />;
                }} />
                <Route exact path="/favorites" render={props => {
                  return <Favorites 
                    router={props}
                    getUser={this.getUser}
                    favorites={this.props.favorites}
                    getFavorites={this.getFavorites}
                    removeFavorite={this.removeFavorite}
                  />
                }} />
                <Route exact path="/favorites/careers" render={props => {
                  return <Favorites
                    router={props}
                    getUser={this.getUser}
                    favorites={this.props.favorites}
                    getFavorites={this.getFavorites}
                    removeFavorite={this.removeFavorite}
                    active='careers'
                  />
                }} />
                <Route exact path="/favorites/training-services" render={props => {
                  return <Favorites
                    router={props}
                    getUser={this.getUser}
                    favorites={this.props.favorites}
                    getFavorites={this.getFavorites}
                    removeFavorite={this.removeFavorite}
                    active='trainings'
                  />
                }} />
                <Route exact path="/careers" render={props => {
                  return <Careers
                    router={props}
                    getUser={this.getUser}
                    careers={this.props.careers}
                    industries={this.props.industries}
                    filterCareers={this.filterCareers}
                    removeFavorite={this.removeFavorite}
                    addFavorite={this.addFavorite}
                    favorites={this.props.favorites}
                  />;
                }} />
                <Route path="/careers/:id" render={props => {
                  return <CareerProfileContainer 
                    router={props} 
                    favorites={this.props.favorites}
                    removeFavorite={this.removeFavorite}
                    addFavorite={this.addFavorite}
                    getUser={this.getUser}
                  />;
                }} />
                <Route path='/services/:id' render={props => {
                  return <ServiceListContainer
                    router={props}
                    favorites={this.props.favorites}
                    removeFavorite={this.removeFavorite}
                    addFavorite={this.addFavorite}
                    getUser={this.getUser}
                  />;
                }} />
                <Route path='/service/:id' render={props => {
                  return <TrainingServiceProfileContainer 
                    router={props} 
                    favorites={this.props.favorites}
                    removeFavorite={this.removeFavorite}
                    addFavorite={this.addFavorite}
                    getUser={this.getUser}
                  />;
                }} />
              </Switch>
            <Footer />
            </Paper>
        </div>
      </Router>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: '56px',
    width: '100vw',
    borderRadius: '0',
    marginLeft: '-7px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '64px'
    }
  }
});

const mapStateToProps = state => {
  return {
    careers: state.careers.careers,
    industries: state.industries.industries,
    user: state.user,
    favorites: state.favorites.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findCareers, getIndustries, findUser, getFavorites }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
