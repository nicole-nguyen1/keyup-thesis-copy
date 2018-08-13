import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  cardStyle: {
    background: 'white',
    margin: '5px'
  },
  headerStyle: {

  },
  textStyle: {

  },
  divStyle: {
    background: '#232E49',
    padding: '20px 5px'
  }
});

class HomePageCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.divStyle}>
        <Card className={classes.cardStyle}>
          <CardContent >
            <Typography variant="headline"className={classes.textStyle}>
            Get Recommendations
            </Typography>
            <Typography className={classes.textStyle}>
            Answer some quick questions to find careers and training 
            that fit your life
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.cardStyle}>
          <CardContent >
            <Typography variant="headline"className={classes.textStyle}>
            Browse Careers and Training Services
            </Typography>
            <Typography className={classes.textStyle}>
            Search in-demand careers by salary, distance, training 
            time, and more
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(HomePageCards);