import React from 'react';
import HeartContainer from '../../containers/HeartContainer.jsx';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    maxWidth: '97%',
    margin: '0 auto 8px'
  },

  // MOBILE STYLES BEGIN HERE
  card: {
    borderRadius: '3px',
    display: 'flex'
  },

  cardContent: {
    paddingBottom: '0',
    width: '100%'
  },

  cardActions: {
    padding: '0'
  },

  text: {
    paddingRight: '10px'
  },

  image: {
    maxHeight: '100px',
    maxWidth: '110px',
    position: 'relative',
    top: '16px'
  },

  imageGrid: {
    flexGrow: '1',
    marginTop: '10px',
    height: '50px'
  },

  learnButton: {
    backgroundColor: '#4469FF',
    top: '8px',
    borderRadius: '3px',
    fontSize: '0.8rem'
  },

  // DESKTOP STYLES BEGIN HERE
  cardDesktop: {
    display: 'flex',
    margin: '0 auto',
    width: '589px'
  },
  textDesktop: {
    display: 'flex',
    flexDirection: 'column',
    width: '350px'
  },
  contentDesktop: {
    flex: '1 0 auto',
    paddingBottom: '0!important'
  },
  imageDesktop: {
    width: 150,
    maxHeight: 150,
    position: 'relative',
    margin: 'auto'
  },
  buttonsDesktop: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px'
  }
});

const ServiceCard = props => {
  const { classes } = props;

  return (
    <Grid item xs={12} className={classes.grid}>
      <MediaQuery query='(max-width: 599px)'>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Grid container>
              <Grid item xs={8} className={classes.text}>
                <Typography color="textSecondary">
                  {props.service.career_name}
                </Typography>
                <Typography variant="headline" paragraph>
                  {props.service.name}
                </Typography>
                <Typography color="textSecondary">
                  Training length: {props.service.card_length}
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
            <Grid container>
              <Grid item xs={10}>
                <Typography color="textSecondary">
                  Tuition range: {props.service.card_tuition}
                </Typography>
                <Typography color="textSecondary">
                  Locations: {props.service.card_location}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={10}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButton}
                  component={Link}
                  to={`/service/${props.service.id}`}>
                  LEARN MORE
                </Button>
              </Grid>
              <Grid item xs={2}>
                <HeartContainer
                  size={'large'}
                  serviceID={props.service.id}
                  favorites={props.favorites}
                  removeFavorite={props.removeFavorite}
                  addFavorite={props.addFavorite}
                  handlePopUp={props.handlePopUp}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.cardActions}></CardActions>
        </Card>
      </MediaQuery>
      <MediaQuery query='(min-width: 600px)'>
        <Card className={classes.cardDesktop}>
          <div className={classes.textDesktop}>
            <CardContent className={classes.contentDesktop}>
              <Typography color="textSecondary">
                {props.service.career_name}
              </Typography>
              <Typography variant="headline">
                {props.service.name}
              </Typography>
              <Typography color="textSecondary">
                Training length: {props.service.card_length}
              </Typography>
              <Typography color="textSecondary">
                Tuition range: {props.service.card_tuition}
              </Typography>
              <Typography color="textSecondary">
                Locations: {props.service.card_location}
              </Typography>
            </CardContent>
            <div className={classes.buttonsDesktop}>
              <Grid container>
                <Grid item xs={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.learnButton}
                    component={Link}
                    to={`/service/${props.service.id}`}>
                    LEARN MORE
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <HeartContainer
                    size={'large'}
                    serviceID={props.service.id}
                    favorites={props.favorites}
                    removeFavorite={props.removeFavorite}
                    addFavorite={props.addFavorite}
                    handlePopUp={props.handlePopUp}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <img
            className={classes.imageDesktop}
            src={props.service.logo_url || '#'}
            title={props.service.name}
          />
        </Card>
      </MediaQuery>
    </Grid>
  );
};

export default withStyles(styles)(ServiceCard);