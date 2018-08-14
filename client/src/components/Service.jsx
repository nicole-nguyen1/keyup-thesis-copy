import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';


class Service extends React.Component {
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
                  {this.props.service.career_id}
                </Typography>
                <Typography variant="headline">
                  {this.props.service.name}
                </Typography>
                <Typography color="textSecondary">
                  Training length: {this.props.service.card_length}
                  Tuition range: {this.props.service.card_tuition}
                  Locations: {this.props.service.card_location}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CardMedia
                  image={this.props.service.logo_url}
                  title="Dummy Title"
                  style={style}
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" component={Link} to={`/careers/${this.props.service.id}`}>
              LEARN MORE
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Service;