import React from 'react';
import Grid from '@material-ui/core/Grid';
import Service from '../Service.jsx';

class FavoriteTrainings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={8}>
        {this.props.services.map((service, index) => {
          return <Service key={service.id || index} service={service} favorites={this.props.favorites}/>;
        })}
      </Grid>
    )
  }
}

export default FavoriteTrainings;