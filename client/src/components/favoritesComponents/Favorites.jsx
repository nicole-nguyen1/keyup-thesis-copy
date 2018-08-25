import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteCareers from './FavoriteCareers.jsx';
import FavoriteTrainings from './FavoriteTrainings.jsx';
import { createApolloFetch } from 'apollo-fetch';
import { getCareerFave, getTrainingFave } from '../graphql/graphql';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { getPageTitle } from '../../actions/action';

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

function NoFaves(props) {
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
  )
}
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      careerFaves: [],
      trainingFaves: []
    }
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
  }

  componentDidMount() {
    store.dispatch(getPageTitle('My Favorites List'));
    this.props.getUser();
    let careers = [];
    let trainings = [];
    const faves = (store.getState()).favorites.favorites;

    //parsing the different types of favorites
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
      this.setState({ careerFaves: res.data.careers })
    });

    this.fetch({
      query: getTrainingFave(trainings)
    })
    .then((res) => {
      this.setState({ trainingFaves: res.data.trainings })
    });
  }

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const faves = (store.getState()).favorites.favorites;
    let component;

    //for rendering different information based on whether or not a user has favorites
    //nested conditional statements need to be done this way for easier readability than 
    //ternary statements
    if (faves[0].id === undefined || faves[0].id === '') {
      if (this.state.value === 0) {
        component = <NoFaves type='careers' />
      } else if (this.state.value === 1) {
        component = <NoFaves type='training services' />
      }
    } else {
      if (this.state.value === 0) {
        component = <FavoriteCareers careers={this.state.careerFaves} favorites={faves} />
      } else if (this.state.value === 1) {
        component = <FavoriteTrainings services={this.state.trainingFaves} favorites={faves} />
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
    )
  }
}

export default connect()(withStyles(styles)(Favorites));