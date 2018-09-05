import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  bullets: {
    position: 'relative',
    height: '1em',
    top: '2px',
    marginRight: '20px'
  },

  lightTextList: {
    color: '#EDEDED',
    display: 'inline'
  },

  listItem: {
    margin: '10px 0'
  },

  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});

const ProsCons = (props) => {
  const { classes } = props;
  let component;

  if (!props.info.cons || props.info.cons.length === 0) {
    component = (<Typography gutterBottom variant='body1' style={{ color: '#FFFFFF', textAlign: 'center' }}>There are no cons! Go for it!</Typography>);
  } else if (props.info.cons.length > 1) {
    component = (props.info.cons.map((con) => {
      return (
        <div key={con.id} className={classes.listItem}>
          <img
            className={classes.bullets}
            src='https://s3.us-east-2.amazonaws.com/keyup-assets/white-thumbs-down.png' />
          <Typography gutterBottom variant='body1' className={classes.lightTextList}>{con.description}</Typography>
        </div>
      );
    }));
  }

  return (
    <div>
      <CardContent className={classes.content}>
        <Typography variant='subheading' style={{
          color: '#1DCD8C',
          textAlign: 'center'
        }}>PROS</Typography>
        {props.info.pros ?
          props.info.pros.map((pro) => {
            return (
              <div key={pro.id} className={classes.listItem}>
                <img
                  className={classes.bullets}
                  src='https://s3.us-east-2.amazonaws.com/keyup-assets/White-thumbs-up-symbol.png' />
                <Typography gutterBottom variant='body1' className={classes.lightTextList}>{pro.description}</Typography>
              </div>
            );
          }) : null}
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant='subheading' gutterBottom style={{
          color: '#E9DC00',
          textAlign: 'center'
        }}>CONS</Typography>
        {component}
      </CardContent>
    </div>
  );
};

export default withStyles(styles)(ProsCons);