import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';

const styles = theme => ({
  outerDivStyle: {
    background: '#232E49',
    padding: '20px 5px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  innerDivStyle: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      margin: '0 auto'
    }
  },
  cardStyle: {
    background: 'white',
    margin: '5px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '360px',
      display: 'table',
      minHeight: '355px'
    }
  },
  headerStyle: {
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      fontSize: '1.5em',
      paddingBottom: '16px'
    }
  },
  textStyle: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      paddingBottom: '16px'
    }
  },
  cardContentStyle: {
    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      verticalAlign: 'middle'
    }
  },
  cardTextStyle: {
    display: 'flex', 
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  iconDiv: {
    paddingRight: '16px',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      padding: '20px'
    }
  },
  icon: {
    height: '26px',
    [theme.breakpoints.up('sm')]: {
      height: '70px'
    }
  },
  cardActionStyle: {
    padding: '0'
  },
  button: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      borderRadius: '0',
      backgroundColor: '#4469FF',
      color: '#FFFFFF',
      margin: '0 auto'
    }
  }
});

class HomePageCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.outerDivStyle}>
        <div className={classes.innerDivStyle}>
          <a style={{ textDecoration: 'none' }} href='https://keyup.typeform.com/to/dlfXQi'>
            <Card className={classes.cardStyle}>
              <CardContent className={classes.cardContentStyle}>
                <div className={classes.cardTextStyle}>
                  <div className={classes.iconDiv}>
                    <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/White-chat-on-blue-circle.png'
                      className={classes.icon}
                    />
                  </div>
                  <div style={{ flexGrow: '4' }}>
                    <Typography variant="body1" className={classes.headerStyle}>
                      Get Career Recommendations
                    </Typography>
                    <Typography className={classes.textStyle}>
                      Answer some quick questions to find careers and training
                      that fit your life
                    </Typography>
                  </div>
                  <MediaQuery query='(max-width: 599px)'>
                    <KeyboardArrowRightIcon style={{ flexGrow: '1' }} />
                  </MediaQuery>
                  <Button variant='contained' className={classes.button}>
                    Get Rec's
                  </Button>
                </div>
              </CardContent>
              <CardActions className={classes.cardActionStyle}></CardActions>
            </Card>
          </a>
          <Link style={{ textDecoration: 'none' }} to="/careers">
            <Card className={classes.cardStyle}>
              <CardContent className={classes.cardContentStyle}>
                <div className={classes.cardTextStyle}>
                  <div className={classes.iconDiv}>
                    <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/white-suitcase-on-blue-circle.png'
                      className={classes.icon}
                    />
                  </div>
                  <div style={{ flexGrow: '4' }}>
                    <Typography variant="body1" className={classes.headerStyle}>
                      Browse Careers and Training Services
                    </Typography>
                    <Typography className={classes.textStyle}>
                      Search in-demand careers by salary, distance, training
                      time, and more
                    </Typography>
                  </div>
                  <MediaQuery query='(max-width: 599px)'>
                    <KeyboardArrowRightIcon style={{ flexGrow: '1' }} />
                  </MediaQuery>
                  <Button variant='contained' className={classes.button}>
                    Browse
                  </Button>
                </div>
              </CardContent>
              <CardActions className={classes.cardActionStyle}></CardActions>
            </Card>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePageCards);