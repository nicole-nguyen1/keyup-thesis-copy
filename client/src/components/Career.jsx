import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typeography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';


class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={9}>
                <Typeography color="textSecondary">
                  Tech
                </Typeography>
                <Typeography variant="headline">
                  {this.props.career.name}
                </Typeography>
                <Typeography color="textSecondary">
                  Pro: Not just for math whizzes!
                  <br />
                  <br />
                  Salary: $79,800
                  <br/>
                  Training length: 2 years
                </Typeography>
              </Grid>
              <Grid item xs={3}>
                <CardMedia 
                  image="image.png"
                  title="Dummy Title"
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  LEARN MORE
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button>
                  FIND TRAINING
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
} 

export default Career;