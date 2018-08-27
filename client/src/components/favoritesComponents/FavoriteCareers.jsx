import React from 'react';
import Career from '../Career.jsx';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { createApolloFetch } from 'apollo-fetch';
import { getCareerFave } from '../graphql/graphql';

const styles = theme => ({
  grid: {
    marginTop: '8px'
  }
});
class FavoriteCareers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careerFaves: []
    }
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
  }

  componentDidMount() {
    this.props.getUser();
    this.parseFaves();
  }

  parseFaves = () => {
    let careers = [];
    const faves = (store.getState()).favorites.favorites;

    if (faves && faves.length > 0) {
      for (let fave of faves) {
        if (fave.career_id !== null) {
          careers.push(fave.career_id);
        }
      }
    }

    this.fetch({
      query: getCareerFave(careers)
    })
    .then((res) => {
      this.setState({ careerFaves: res.data.careers })
    });
  }

  render() {
    const { classes } = this.props;
    const faves = (store.getState()).favorites.favorites;

    return (
      <Grid container className={classes.grid}>
        {this.state.careerFaves.map((career, index) => {
          return <Career key={career.id || index} career={career} favorites={faves}/>;
        })}
      </Grid>
    )
  }
}

export default connect()(withStyles(styles)(FavoriteCareers));