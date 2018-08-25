import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    maxWidth: '97%',
    margin: '0 auto 8px'
  },

  card: {
    borderRadius: '3px'
  },

  text: {
    paddingRight: '6px'
  },

  image: {
    maxHeight: '110px',
    width: '110px'
  },

  imageGrid: {
    flexGrow: '1',
    marginTop: '10px'
  },

  learnButton: {
    backgroundColor: '#4469FF',
    top: '8px',
    borderRadius: '3px'
  }
});

const Service = props => {
  const { classes } = props;

  return (
    <Grid item xs={12} className={classes.grid}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item xs={8} className={classes.text}>
              <Typography color="textSecondary">
                {props.service.career_name}
              </Typography>
              <Typography variant="headline">
                {props.service.name}
              </Typography>
              <Typography color="textSecondary">
                <br/>
                Training length: {props.service.card_length}
                <br/>
                Tuition range: {props.service.card_tuition}
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.imageGrid}>
              <img
                src={props.service.logo_url || '#'}
                title="Dummy Title"
                className={classes.image}
              />
            </Grid>
          </Grid>
          <Typography color="textSecondary">
            Locations: {props.service.card_location}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.learnButton} 
            component={Link} 
            to={`/service/${props.service.id}`}>
            LEARN MORE
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(Service);