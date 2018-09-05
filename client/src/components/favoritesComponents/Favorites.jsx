import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { createApolloFetch } from 'apollo-fetch';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { getPageTitle } from '../../actions/action';
import { getCareerFave, getTrainingFave } from '../graphql/graphql';
import FavoriteCareers from './FavoriteCareers.jsx';
import FavoriteTrainings from './FavoriteTrainings.jsx';
import { Paper, Tabs, Tab, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: '#CFCFCE'
  },

  tabs: {
    backgroundColor: '#3651C5'
  },

  tabsIndicator: {
    backgroundColor: '#02ED96'
  },

  tabRoot: {
    color: '#EDEDEE',
    padding: '10px',
    '&$tabSelected': {
      color: '#02ED96'
    }
  },

  tabSelected: {}
});

const NoFaves = (props) => {
  return (
    <div>
      <Paper style={{ padding: '30px 15px', borderRadius: '0', height: '100%' }}>
        <Typography variant='body1' paragraph>No favorites yet?</Typography>
        <Typography variant='body1' paragraph>
          <Link to='/careers'
            style={{
              color: '#4469FF',
              textDecoration: 'none'
            }}>Browser Careers and Training</Link> to pick out some likely-looking {props.type}.
        </Typography>
      </Paper>
    </div>
  );
};
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      careerFaves: [],
      trainingFaves: []
    };
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
  }

  componentDidMount() {
    store.dispatch(getPageTitle('My Favorites List'));

    //the "active" prop is passed when a user goes to a specific favorites URL
    //this will trigger the correct active tab for the user
    if (this.props.active === 'careers') {
      this.setState({ value: 0 });
    } else if (this.props.active === 'trainings') {
      this.setState({ value: 1 });
    }
    this.props.getUser();
    this.props.getFavorites(JSON.stringify(localStorage.getItem('jwt')));
  }

  componentDidUpdate(prevProps) {
    if (this.props.favorites !== prevProps.favorites) {
      this.parseFaves();
    }
  }

  handleChange = (e, value) => {
    this.setState({ value });
  };

  parseFaves = () => {
    let careers = [];
    let trainings = [];
    const faves = this.props.favorites.favorites;

    if (faves && faves.length > 0) {
      for (let fave of faves) {
        if (fave.career_id !== null) {
          careers.push(fave.career_id);
        } else if (fave.service_id !== null) {
          trainings.push(fave.service_id);
        }
      }
    }

    this.fetch({
      query: getCareerFave(careers)
    })
      .then((res) => {
        this.setState({ careerFaves: res.data.careers });
      });

    this.fetch({
      query: getTrainingFave(trainings)
    })
      .then((res) => {
        this.setState({ trainingFaves: res.data.trainings });
      });
  }

  render() {
    const token = localStorage.getItem('jwt');
    if (token === null) {
      return (<Redirect to={{ pathname: '/home'}} />);
    }
    
    const { classes } = this.props;
    const faves = this.props.favorites.favorites;
    let component;

    //for rendering different information based on whether or not a user has favorites
    //nested conditional statements need to be done this way for easier readability than 
    //ternary statements
    if (!faves || faves.length === 0) {
      if (this.state.value === 0) {
        component = <NoFaves type='careers' />;
      } else if (this.state.value === 1) {
        component = <NoFaves type='training services' />;
      }
    } else {
      if (this.state.value === 0 && this.state.careerFaves.length > 0) {
        component = <FavoriteCareers getUser={this.props.getUser} careers={this.state.careerFaves} favorites={faves} removeFavorite={this.props.removeFavorite}/>;
      } else if (this.state.value === 0 && this.state.careerFaves.length === 0) {
        component = <NoFaves type='careers' />;
      } else if (this.state.value === 1 && this.state.trainingFaves.length > 0) {
        component = <FavoriteTrainings getUser={this.props.getUser} trainings={this.state.trainingFaves} favorites={faves} removeFavorite={this.props.removeFavorite}/>;
      } else if (this.state.value === 1 && this.state.trainingFaves.length === 0) {
        component = <NoFaves type='training services' />;
      }
    }

    return (
      <div className={classes.background}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          classes={{
            indicator: classes.tabsIndicator
          }}
          className={classes.tabs}
          centered
        >
          <Tab label="Favorite Careers"
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected
            }} />
          <Tab label="Favorite Training" 
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected
            }}
          />
        </Tabs>
        {component}
      </div>
    );
  }
}

export default connect()(withStyles(styles)(Favorites));