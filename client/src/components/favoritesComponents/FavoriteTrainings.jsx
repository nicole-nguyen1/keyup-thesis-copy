import React from 'react';
import Grid from '@material-ui/core/Grid';
import Service from '../Service.jsx';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    marginTop: '8px'
  }
});
class FavoriteTrainings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.grid}>
        {this.props.services.map((service, index) => {
          return <Service key={service.id || index} service={service} favorites={this.props.favorites}/>;
        })}
      </Grid>
    )
  }
}

export default withStyles(styles)(FavoriteTrainings);