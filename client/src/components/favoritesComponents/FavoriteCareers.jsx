import React from 'react';
import Career from '../Career.jsx';
import Grid from '@material-ui/core/Grid';
import { createApolloFetch } from 'apollo-fetch';
import { getCareersQuery } from '../graphql/graphql';

class FavoriteCareers extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
  }

  getCareer = () => {
    this.fetch({
      query: getCareersQuery
    })
  }

  render() {
    return (
      <Grid container spacing={8}>
        {this.props.careers.map((career, index) => {
          return <Career key={career.id || index} career={career} />;
        })}
      </Grid>
    )
  }
}

export default FavoriteCareers;