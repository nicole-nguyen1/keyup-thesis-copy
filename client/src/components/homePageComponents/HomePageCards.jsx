import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { CardActions } from '@material-ui/core';

const styles = theme => ({
  cardStyle: {
    background: 'white',
    margin: '5px'
  },
  headerStyle: {
    fontWeight: 'bold'
  },
  cardContentStyle: {
    display: 'flex', 
    alignItems: 'center'
  },
  divStyle: {
    background: '#232E49',
    padding: '20px 5px'
  },
  icon: {
    height: '26px',
    marginRight: '16px'
  },
  cardActionStyle: {
    padding: '0'
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
        <a style={{ textDecoration: 'none' }} href='https://keyup.typeform.com/to/dlfXQi'>
          <Card className={classes.cardStyle}>
            <CardContent>
              <div className={classes.cardContentStyle}>
                <img src='https://s3.amazonaws.com/key-up-assets/White-chat-on-blue-circle.png' 
                  className={classes.icon}
                />
                <div style={{ flexGrow: '4' }}>
                  <Typography variant="body1" className={classes.headerStyle}>
                    Get Recommendations
                  </Typography>
                  <Typography className={classes.textStyle}>
                    Answer some quick questions to find careers and training
                    that fit your life
                  </Typography>
                </div>
                <KeyboardArrowRightIcon style={{ flexGrow: '1' }} />
              </div>
            </CardContent>
            <CardActions className={classes.cardActionStyle}></CardActions>
          </Card>
        </a>
        <Link style={{textDecoration: 'none'}} to="/careers">
          <Card className={classes.cardStyle}>
            <CardContent>
              <div className={classes.cardContentStyle}>
                <img src='https://s3.amazonaws.com/key-up-assets/white-suitcase-on-blue-circle.png' 
                  className={classes.icon}
                />
                <div style={{flexGrow: '4'}}>
                  <Typography variant="body1"className={classes.headerStyle}>
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
            <CardActions className={classes.cardActionStyle}></CardActions>
          </Card>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(HomePageCards);