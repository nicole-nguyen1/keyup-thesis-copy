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

const styles = theme => ({
  paper: {
    height: '100%'
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
    <div style={{ padding: '30px 15px' }}>
      <Typography variant='body1' paragraph>No favorites yet?</Typography>
      <Typography variant='body1' paragraph>
        <Link to='/careers' 
          style={{
            color: '#4469FF',
            textDecoration: 'none'
          }}>Browser Careers and Training</Link> to pick out some likely-looking {props.type}.
      </Typography>
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
    let careers = [];
    let trainings = [];
    //parsing the different types of favorites
    if (this.props.favorites.length > 0) {
      for (let fave of this.props.favorites) {
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
    let info;

    //for rendering different information based on whether or not a user has favorites
    //nested conditional statements need to be done this way for easier readability than 
    //ternary statements
    if (this.props.favorites[0].id === '' || this.props.favorites === undefined) {
      if (this.state.value === 0) {
        info = <NoFaves type='careers' />
      } else if (this.state.value === 1) {
        info = <NoFaves type='training services' />
      }
    } else {
      if (this.state.value === 0) {
        info = <FavoriteCareers careers={this.state.careerFaves} favorites={this.props.favorites} />
      } else if (this.state.value === 1) {
        info = <FavoriteTrainings services={this.state.trainingFaves} favorites={this.props.favorites} />
      }
    }

    return (
      <div>
        <Paper className={classes.paper}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            // indicatorColor="primary"
            textColor="primary"
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
          {info}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Favorites);