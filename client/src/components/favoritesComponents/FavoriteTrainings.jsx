import React from 'react';
import Grid from '@material-ui/core/Grid';
import ServiceCard from '../trainingServiceListComponents/ServiceCard.jsx';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createApolloFetch } from 'apollo-fetch';

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
    };
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.grid}>
        {this.props.trainings.map((service, index) => {
          return <ServiceCard key={service.id || index} service={service} favorites={this.props.favorites} removeFavorite={this.props.removeFavorite}/>;
        })}
      </Grid>
    );
  }
}

export default connect()(withStyles(styles)(FavoriteTrainings));