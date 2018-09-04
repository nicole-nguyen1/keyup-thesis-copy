import React from 'react';
import CareerCard from '../careerListComponents/CareerCard.jsx';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createApolloFetch } from 'apollo-fetch';

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
    };
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
  }

  render() {
    const { classes } = this.props;
  
    return (
      <Grid container className={classes.grid}>
        {this.props.careers.map((career, index) => {
          return <CareerCard key={career.id || index} career={career} favorites={this.props.favorites} removeFavorite={this.props.removeFavorite}/>;
        })}
      </Grid>
    );
  }
}

export default connect()(withStyles(styles)(FavoriteCareers));