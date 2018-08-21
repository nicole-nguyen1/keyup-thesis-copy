import React from 'react';
import Typography from '@material-ui/core/Typography';
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
  }
});
const Needs = (props) => {
  const { classes } = props;
  return (
    <div >
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
    </div>
  );
}

export default withStyles(styles)(Needs);

