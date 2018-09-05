import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  lightText: {
    color: '#EDEDED',
    margin: '20px 0 0 10px'
  },
  listItem: {
    margin: '10px 0'
  },
  lightTextList: {
    color: '#EDEDED',
    display: 'center',
    margin: '30px 0 30px 50px'
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});

const Needs = (props) => {
  const { classes } = props;
  return (
    <CardContent className={classes.content}>
      <Typography variant='title' className={classes.lightText}>
            To Get In, You Need...
      </Typography>    
      <div>
        {props.service.requirements && props.service.requirements.map(requirement => {
          return (
            <div key={requirement.id} className={classes.listItem}>
              <Typography variant='body1' className={classes.lightTextList}>
                {requirement.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </CardContent>
  );
};

export default withStyles(styles)(Needs);

