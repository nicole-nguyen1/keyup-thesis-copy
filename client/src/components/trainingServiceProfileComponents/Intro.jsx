import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  background: {
    backgroundColor: '#232e49',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    paddingTop: '40px'
  },
  foreground: {
    width: '200px',
    borderRadius: '50%',
    height: '200px',
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  image: {
    maxWidth: '150px',
    margin: 'auto'
  },
  text: {
    textAlign: 'center',
    padding: '20px 0 40px 0',
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