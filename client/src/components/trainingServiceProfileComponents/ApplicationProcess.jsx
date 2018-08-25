import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import ApplyDialog from './ApplyDialog.jsx';
import { withStyles } from '@material-ui/core/styles';
import MultiLineParagraph from '../MultiLineParagraph.jsx';

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
  }
});

const ApplicationProcess = props => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card} >
        <CardContent>
          <Typography gutterBottom variant='title'>Application Process</Typography>
          {props.service.app_process ? <MultiLineParagraph text={props.service.app_process} /> : props.service.app_process}
        </CardContent>
        <CardActions >
          <div className={classes.buttons} >
            <Button onClick={props.toggleDialog} variant="contained" color="primary" style={{ backgroundColor: '#4e74ff' }}>
              APPLY NOW
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ backgroundColor: '88888a' }}
              onClick={props.toggleQualifyDialog}
            >
              GET ADVICE
            </Button>
          </div>
        </CardActions>
        <CardContent className={classes.linkContainer}>
          <Typography gutterBottom variant='body1'><a className={classes.link} href={props.service.program_url}>Go to {props.service.name} website</a></Typography>
        </CardContent>
      </Card>
      <ApplyDialog open={props.open} toggleDialog={props.toggleDialog} service={props.service} />
    </div>
  );
};

export default withStyles(styles)(ApplicationProcess);
