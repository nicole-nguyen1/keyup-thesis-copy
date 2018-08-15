import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';


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
                <Typography color="textSecondary">
                  {this.props.career.industry_name}
                </Typography>
                <Typography variant="headline">
                  {this.props.career.name}
                </Typography>
                <Typography color="textSecondary">
                  {this.props.career.card_pro}
                  <br />
                  <br />
                  Salary: {this.props.career.annual_salary}
                  <br/>
                  Training length: {this.props.career.training_length}
                </Typography>
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
                <Button variant="contained" color="primary" style={{backgroundColor: '2979ff'}} component={Link} to={`/careers/${this.props.career.id}`}>
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