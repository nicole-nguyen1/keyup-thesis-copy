import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import HeartContainer from './heartComponents/HeartContainer.jsx';


const Service = props => {
  const style = {
    height: '20%'
  };
  console.log(props)
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={9}>
              <Typography color="textSecondary">
                {props.careerName}
              </Typography>
              <Typography variant="headline">
                {props.service.name}
              </Typography>
              <Typography color="textSecondary">
                <br/>
                Training length: {props.service.card_length}
                <br/>
                Tuition range: {props.service.card_tuition}
                <br/>
                Locations: {props.service.card_location}
                <br/>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardMedia
                image={props.service.logo_url || '#'}
                title="Dummy Title"
                style={style}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" style={{backgroundColor: '2979ff', marginTop: '10px'}} component={Link} to={`/service/${props.service.id}`}>
            LEARN MORE
          </Button>
          <HeartContainer 
            size={'large'}
            serviceID={props.service.id}
            favorites={props.favorites}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;