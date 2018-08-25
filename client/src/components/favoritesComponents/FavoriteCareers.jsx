import React from 'react';
import Career from '../Career.jsx';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    marginTop: '8px'
  }
});
class FavoriteCareers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.grid}>
        {this.props.careers.map((career, index) => {
          return <Career key={career.id || index} career={career} favorites={this.props.favorites}/>;
        })}
      </Grid>
    )
  }
}

export default withStyles(styles)(FavoriteCareers);