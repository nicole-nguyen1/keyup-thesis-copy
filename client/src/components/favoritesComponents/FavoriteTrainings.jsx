import React from 'react';
import Grid from '@material-ui/core/Grid';
import Service from '../Service.jsx';
import { withStyles } from '@material-ui/core/styles';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { createApolloFetch } from 'apollo-fetch';
import { getTrainingFave } from '../graphql/graphql';

const styles = theme => ({
  grid: {
    marginTop: '8px'
  }
});
class FavoriteTrainings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingFaves: []
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
    let trainings = [];
    const faves = this.props.favorites

    if (faves && faves.length > 0) {
      for (let fave of faves) {
        if (fave.service_id !== null) {
          trainings.push(fave.service_id);
        }
      }
    }

    this.fetch({
      query: getTrainingFave(trainings)
    })
    .then((res) => {
      this.setState({ trainingFaves: res.data.trainings })
    });
  }

  render() {
    const { classes } = this.props;
    const faves = this.props.favorites;

    return (
      <Grid container className={classes.grid}>
        {this.state.trainingFaves.map((service, index) => {
          return <Service key={service.id || index} service={service} favorites={faves}/>;
        })}
      </Grid>
    )
  }
}

export default connect()(withStyles(styles)(FavoriteTrainings));