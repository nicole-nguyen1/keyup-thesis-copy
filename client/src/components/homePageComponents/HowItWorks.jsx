import React from 'react';
import Typeography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const HowItWorks = props => {
  const { classes } = props;
  return (
    <div className={classes.component}>
      <Typeography variant='subheading' className={classes.title}>How KeyUp Works</Typeography>
      <div className={classes.grid}>
        <div className={classes.cell}>
          <img src='https://s3.amazonaws.com/key-up-assets/lightbulb-white.png' className={classes.image}/>
          <Typeography variant='body1' style={{color: '#ffae51'}}>Learn</Typeography>
          <Typeography variant='body1' style={{color: '#ededee'}}>Get recommendations or browse careers that are in-demand in Austin</Typeography>
        </div>

        <div className={classes.cell}>
          <img src='https://s3.amazonaws.com/key-up-assets/Zero-In-(target).png' className={classes.image}/>
          <Typeography variant='body1' style={{color: '#b2c3fd'}}>Zero In</Typeography>
          <Typeography variant='body1' style={{color: '#ededee'}}>Find training services in Austin that fit into your life</Typeography>
        </div>

        <div className={classes.cell}>
          <img src='https://s3.amazonaws.com/key-up-assets/Connect-(handshake)-icon.png' className={classes.image}/>
          <Typeography variant='body1' style={{color: '#e9dc00'}}>Connect</Typeography>
          <Typeography variant='body1' style={{color: '#ededee'}}>Get matched to support programs that can pay for tuition, childcare, etc.</Typeography>
        </div>

        <div className={classes.cell}>
          <img src='https://s3.amazonaws.com/key-up-assets/Go-(rocket-ship)-icon.png' className={classes.image}/>
          <Typeography variant='body1' style={{color: '#02ed96'}}>Go!</Typeography>
          <Typeography variant='body1' style={{color: '#ededee'}}>Apply and start on your path to a better future</Typeography>
        </div>
      </div>
    </div>
  );
}

const styles = {
  component: {
    background: '#232e49',
    textAlign: 'center',
    margin: '0'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  cell: {
    margin: '10px'
  },
  image: {
    maxWidth: '150px',
    maxHeight: '100px',
    margin: '5px'
  },
  title: {
    padding: '25px 0 5px 0',
    color: '#ededee'
  }
};

export default withStyles(styles)(HowItWorks);