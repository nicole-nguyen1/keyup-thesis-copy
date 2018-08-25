import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  background: {
    backgroundColor: '#232e49',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: '80px 0 0 0'
  },
  foreground: {
    width: '200px',
    borderRadius: '50%',
    height: '200px',
    margin: "0 auto",
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  image: {
    height: '70%',
    maxWidth: '150px',
    margin: 'auto'
  },
  text: {
    textAlign: 'center',
    padding: '10vh 5vh',
    color: 'white'
  }
});
class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <Grid container className={classes.foreground}>
          <img
            src={this.props.service.logo_url}
            className={classes.image}
          />
        </Grid>
        <div className={classes.text}>
          <Typography variant="headline" color='inherit'>
            {this.props.service.name}
          </Typography>
          <Typography variant="subheading" color='inherit'>
            {this.props.service.subheading}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);