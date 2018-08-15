import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const EarningsOpenings = (props) => {
  const styles = {
    dark: {
      backgroundColor: '#232E49',
      borderRadius: 0,
      padding: '5px'
    },

    lightText: {
      color: '#EDEDED'
    }
  }
  return (
    <div>
      <Card style={styles.dark}>
        <CardContent>
          <Typography gutterBottom variant='title' style={styles.lightText}>Average Earnings</Typography>
          <Typography variant='body1' style={styles.lightText}>
            <span style={{ color: '#1DCD8C' }}>{props.career.annual_salary}</span> or {props.career.hourly_pay}/hr
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant='title' style={styles.lightText}>Job Openings</Typography>
          <Typography variant='body1' style={styles.lightText}>
            <span style={{ color: '#1DCD8C' }}>{props.career.openings.split(': ')[0]}&#58;</span><span> {props.career.openings.split(': ')[1]}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default EarningsOpenings;