import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Email = (props) => {
  const url = `mailto:?Subject=KeyUp&Body=Hey%2C%0A%0AI%27ve%20been%20using%20KeyUp%20to%20learn%20more%20about%20careers%2C%20training%20services%2C%20and%20support%20programs.%0A%0AHere%27s%20an%20interesting%20page%20I%20wanted%20to%20share%20with%20you%3A%20${props.url}`;

  return (
    <div style={props.styles.row}>
      <a href={url} style={{ textDecoration: 'none' }}>
        <Grid item
          role="button">
          <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Email-Icon.png' style={props.styles.bottomIcon} />
          <Typography variant='caption'>Email</Typography>
        </Grid>
      </a>
    </div>
  );
};

export default Email;