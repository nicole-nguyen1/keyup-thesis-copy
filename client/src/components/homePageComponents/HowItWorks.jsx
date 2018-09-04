import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const styles = theme => ({
  component: {
    background: '#232e49',
    textAlign: 'center',
    margin: '0',
    borderRadius: 0
  },
  grid: {
    maxWidth: '360px',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      maxWidth: '1280px'
    }
  },
  cell: {
    padding: '30px 0',
    maxWidth: '200px',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      padding: '0 50px'
    }
  },
  image: {
    maxWidth: '150px',
    maxHeight: '100px',
    margin: '20px'
  },
  title: {
    padding: '30px 0 5px 0',
    color: '#ededee'
  }
});

const HowItWorks = props => {
  const { classes } = props;
  return (
    <Card className={classes.component}>
      <CardContent>
        <Typography variant='subheading' className={classes.title} paragraph>How KeyUp Works</Typography>
        <div className={classes.grid}>
          <div className={classes.cell}>
            <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/lightbulb-white.png' className={classes.image} />
            <Typography gutterBottom variant='body1' style={{ color: '#ffae51' }}>Learn</Typography>
            <Typography gutterBottom variant='body1' style={{ color: '#ededee' }}>Get recommendations or browse careers that are in-demand in Austin</Typography>
          </div>

          <div className={classes.cell}>
            <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Zero-In-(target).png' className={classes.image} />
            <Typography gutterBottom variant='body1' style={{ color: '#b2c3fd' }}>Zero In</Typography>
            <Typography gutterBottom variant='body1' style={{ color: '#ededee' }}>Find training services in Austin that fit into your life</Typography>
          </div>

          <div className={classes.cell}>
            <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Connect-(handshake)-icon.png' className={classes.image} />
            <Typography gutterBottom variant='body1' style={{ color: '#e9dc00' }}>Connect</Typography>
            <Typography gutterBottom variant='body1' style={{ color: '#ededee' }}>Get matched to support programs that can pay for tuition, childcare, etc.</Typography>
          </div>

          <div className={classes.cell}>
            <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Go-(rocket-ship)-icon.png' className={classes.image} />
            <Typography gutterBottom variant='body1' style={{ color: '#02ed96' }}>Go!</Typography>
            <Typography gutterBottom variant='body1' style={{ color: '#ededee' }}>Apply and start on your path to a better future</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(HowItWorks);