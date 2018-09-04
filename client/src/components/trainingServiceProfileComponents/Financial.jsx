import React from 'react';
import MultiLineParagraph from '../reusableComponents/MultiLineParagraph.jsx';
import Qualify from './Qualify.jsx';
import Outcomes from './Outcomes.jsx';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const styles = theme => ({
  card: {
    borderRadius: 0,
    padding: '5px'
  },
  qualify: {
    margin: '30px 0'
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});

const Financial = props => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='title'>Financial Information</Typography>
          {props.service.financial_info ? <MultiLineParagraph text={props.service.financial_info} /> : props.service.financial_info}
          <div className={classes.qualify}>
            <Qualify />
          </div>
          <Outcomes service={props.service} />
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Financial);
