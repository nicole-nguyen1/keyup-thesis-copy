import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HeartContainer from './heartComponents/HeartContainer.jsx';
import { withStyles } from '@material-ui/core/styles';
import { CardActions, CardMedia } from '@material-ui/core';
import MediaQuery from 'react-responsive';

const styles = theme => ({
  grid: {
    maxWidth: '97%', 
    margin: '0 auto 8px'
  },

  // MOBILE STYLES BEGIN HERE
  card: {
    borderRadius: '3px'
  },

  cardContent: {
    paddingBottom: '0'
  },

  cardActions: {
    padding: '0'
  },

  text: {
    paddingRight: '10px'
  },

  image: {
    height: '110px',
    width: '130px',
    [theme.breakpoints.up('sm')]: {
      height: '189px',
      width: '189px'
    }
  },

  learnButton: {
    backgroundColor: '#4469FF',
    top: '8px',
    borderRadius: '3px',
    fontSize: '0.8rem'
  },

  trainingButton: {
    backgroundColor: 'transparent',
    color: 'grey',
    top: '8px',
    borderRadius: '3px',
    fontSize: '0.8rem'
  },
  right: {
    position: 'relative',
    right: '8px'
  },

  // DESKTOP STYLES BEGIN HERE
  cardDesktop: {
    display: 'flex',
    marginBottom: '10px',
    width: '589px'
  },
  textDesktop: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '350px'
  },
  contentDesktop: {
    flex: '1 0 auto',
    paddingBottom: '0!important'
  },
  imageDesktop: {
    width: 189,
    height: 189,
    position: 'relative',
    margin: 'auto'
  },
  buttonsDesktop: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px'
  }
});
class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    let plumber = `Pipefitter /\n\nPlumber`;
    
    return (
      <Grid item xs={12} className={classes.grid}>
        <MediaQuery query='(max-width: 599px)'>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Grid container>
                  <Grid item xs={7} className={classes.text}>
                    <Typography color="textSecondary" gutterBottom>
                      {this.props.career.industry_name}
                    </Typography>
                    <Typography variant="headline" paragraph>
                      {this.props.career.name === 'Pipefitter/Plumber' ? plumber : this.props.career.name}
                    </Typography>
                    <Typography color="textSecondary" paragraph>
                      {this.props.career.card_pro}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <img
                      src={this.props.career.card_image_url || '#'}
                      title={this.props.career.name}
                      className={classes.image}
                    />
                  </Grid>
                </Grid>
                <Grid>
                  <Grid item xs={12}>
                    <Typography color="textSecondary" paragraph>
                      Salary: {this.props.career.annual_salary}
                      <br />
                      Training length: {this.props.career.training_length}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={5}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.learnButton}
                      component={Link}
                      to={`/careers/${this.props.career.id}`}>
                      LEARN MORE
                </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      className={classes.trainingButton}
                      component={Link}
                      to={`/services/${this.props.career.id}`}>
                      FIND TRAINING
                </Button>
                  </Grid>
                  <Grid item xs={1}>
                    <HeartContainer
                      size={'large'}
                      favorites={this.props.favorites}
                      careerID={String(this.props.career.id)}
                      removeFavorite={this.props.removeFavorite}
                      addFavorite={this.props.addFavorite}
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
                <Typography color="textSecondary" gutterBottom>
                  {this.props.career.industry_name}
                </Typography>
                <Typography variant="headline" paragraph>
                  {this.props.career.name === 'Pipefitter/Plumber' ? plumber : this.props.career.name}
                </Typography>
                <Typography color="textSecondary" paragraph>
                  {this.props.career.card_pro}
                </Typography>
                <Typography color="textSecondary">
                  Salary: {this.props.career.annual_salary}
                  <br />
                  Training length: {this.props.career.training_length}
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
                      to={`/careers/${this.props.career.id}`}>
                      LEARN MORE
                </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      className={classes.trainingButton}
                      component={Link}
                      to={`/services/${this.props.career.id}`}>
                      FIND TRAINING
                </Button>
                  </Grid>
                  <Grid item xs={1}>
                    <HeartContainer
                      size={'large'}
                      favorites={this.props.favorites}
                      careerID={String(this.props.career.id)}
                      removeFavorite={this.props.removeFavorite}
                      addFavorite={this.props.addFavorite}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
            <CardMedia
              className={classes.imageDesktop}
              image={this.props.career.card_image_url || '#'}
              title={this.props.career.name}
            />
          </Card>
        </MediaQuery>
      </Grid>
    );
  }
} 

export default withStyles(styles)(Career);