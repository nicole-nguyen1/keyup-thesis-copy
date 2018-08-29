import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import HeartContainer from './heartComponents/HeartContainer.jsx';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    maxWidth: '97%', 
    margin: '0 auto 8px'
  },

  card: {
    borderRadius: '3px'
  },

  cardContent: {
    paddingBottom: '5px!important'
  },

  text: {
    paddingRight: '6px'
  },

  image: {
    maxHeight: '110px',
    width: '110px'
  },

  learnButton: {
    backgroundColor: '#4469FF',
    top: '8px',
    borderRadius: '3px'
  },

  trainingButton: {
    backgroundColor: 'transparent',
    color: 'grey',
    top: '8px',
    borderRadius: '3px'
  }
});
class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Grid item xs={12} className={classes.grid}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Grid container>
              <Grid item xs={8} className={classes.text}>
                <Typography color="textSecondary" gutterBottom>
                  {this.props.career.industry_name}
                </Typography>
                <Typography variant="headline" paragraph>
                  {this.props.career.name}
                </Typography>
                <Typography color="textSecondary" paragraph>
                  {this.props.career.card_pro}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img 
                  src={this.props.career.card_image_url || '#'}
                  title="Dummy Title"
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
              <Grid item xs={2} >
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
        </Card>
      </Grid>
    );
  }
} 

export default withStyles(styles)(Career);