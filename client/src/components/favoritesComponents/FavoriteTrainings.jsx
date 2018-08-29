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

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.grid}>
        {this.props.trainings.map((service, index) => {
          return <Service key={service.id || index} service={service} favorites={this.props.favorites} removeFavorite={this.props.removeFavorite}/>;
        })}
      </Grid>
    )
  }
}

export default connect()(withStyles(styles)(FavoriteTrainings));