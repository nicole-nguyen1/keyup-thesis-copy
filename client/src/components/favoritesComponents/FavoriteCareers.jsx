import React from 'react';
import Career from '../Career.jsx';
import Grid from '@material-ui/core/Grid';

class FavoriteCareers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={8}>
        {this.props.careers.map((career, index) => {
          return <Career key={career.id || index} career={career} favorites={this.props.favorites}/>;
        })}
      </Grid>
    )
  }
}

export default FavoriteCareers;