import React from 'react';
import Service from './Service.jsx';
import Grid from '@material-ui/core/Grid';

const Services = props => {
  return (
    <div>
      <Grid container spacing={8}>
        {props.services.map((service, index) => {
          return <Service key={service.id || index} service={service} careerName={props.careerName}/>;
        })}
      </Grid>
    </div>
  );
};

export default Services;
