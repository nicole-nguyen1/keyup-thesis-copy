import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { ListItemIcon } from '@material-ui/core/ListItemIcon';




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
  },
  icon: {}
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
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{flexGrow: '4'}}>
                <Typography variant="headline"className={classes.textStyle}>
            Get Recommendations
                </Typography>
                <Typography className={classes.textStyle}>
            Answer some quick questions to find careers and training 
            that fit your life
                </Typography>
              </div>
              <KeyboardArrowRightIcon style={{flexGrow: '1'}} />
            </div>
          </CardContent>
        </Card>
        <Link style={{textDecoration: 'none'}} to="/careers">
          <Card className={classes.cardStyle}>
            <CardContent >
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{flexGrow: '4'}}>
                  <Typography variant="headline"className={classes.textStyle}>
            Browse Careers and Training Services
                  </Typography>
                  <Typography className={classes.textStyle}>
            Search in-demand careers by salary, distance, training 
            time, and more
                  </Typography>
                </div>
            
                <KeyboardArrowRightIcon style={{flexGrow: '1'}} />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(HomePageCards);