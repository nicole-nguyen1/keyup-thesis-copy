import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Qualify from './Qualify.jsx';

const Financial = props => {

  const styles = {
    card: {
      borderRadius: 0,
      padding: '5px'
    }
  };

  return (
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Typography gutterBottom variant='title'>Financial Information</Typography>
          <Typography gutterBottom variant='body1'>{props.service.financial_info}</Typography>
          <div style={{marginTop: '20px'}}>
            <Qualify />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Financial;
