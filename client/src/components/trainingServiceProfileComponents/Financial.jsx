import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Qualify from './Qualify.jsx';
import Outcomes from './Outcomes.jsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    borderRadius: 0,
    padding: '5px'
  },
  qualify: {
    margin: '30px 0'
  }
};

const Financial = props => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant='title'>Financial Information</Typography>
          <Typography gutterBottom variant='body1'>{props.service.financial_info}</Typography>
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
