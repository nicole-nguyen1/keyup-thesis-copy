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
    const style = {
      height: '20%'
    };
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={9}>
                <Typeography color="textSecondary">
                  Need relation from careers to industry table {this.props.career.industry_id}
                </Typeography>
                <Typeography variant="headline">
                  {this.props.career.name}
                </Typeography>
                <Typeography color="textSecondary">
                  {this.props.career.card_pro}
                  <br />
                  <br />
                  Salary: {this.props.career.annual_salary}
                  <br/>
                  Training length: {this.props.career.training_length}
                </Typeography>
              </Grid>
              <Grid item xs={3}>
                <CardMedia 
                  image={this.props.career.card_image_url}
                  title="Dummy Title"
                  style={style}
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