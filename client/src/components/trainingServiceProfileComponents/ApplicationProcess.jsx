import React from 'react';
import ApplyDialog from './ApplyDialog.jsx';
import HeartContainer from '../../containers/HeartContainer.jsx';
import MultiLineParagraph from '../reusableComponents/MultiLineParagraph.jsx';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    paddingTop: '30px',
    paddingBottom: '20px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  },
  linkContainer: {
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#7a94f4'
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      margin: '0 auto'
    }
  }
});

const ApplicationProcess = props => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card} >
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='title'>Application Process</Typography>
          {props.service.app_process ? <MultiLineParagraph text={props.service.app_process} /> : props.service.app_process}
        </CardContent>
        <CardActions className={classes.content}>
          <div className={classes.buttons} >
            <Button onClick={props.toggleDialog} variant="contained" color="primary" style={{ backgroundColor: '#4e74ff' }}>
              APPLY NOW
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ backgroundColor: '88888a' }}
              onClick={props.toggleAdviceForm}
            >
              GET ADVICE
            </Button>
          </div>
        </CardActions>
        <div style={{ textAlign: 'center' }}>
          <HeartContainer 
            size={'large'}
            profile={true}
            serviceID={props.service.id}
            favorites={props.favorites}
            removeFavorite={props.removeFavorite}
            addFavorite={props.addFavorite}
            handlePopUp={props.handlePopUp}
          />
        </div>
        <CardContent className={classes.linkContainer}>
          <Typography gutterBottom variant='body1'><a className={classes.link} href={props.service.program_url}>Go to {props.service.name} website</a></Typography>
        </CardContent>
      </Card>
      <ApplyDialog open={props.open} toggleDialog={props.toggleDialog} service={props.service} />
    </div>
  );
};

export default withStyles(styles)(ApplicationProcess);
