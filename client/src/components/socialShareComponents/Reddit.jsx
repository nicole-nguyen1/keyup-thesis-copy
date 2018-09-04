import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Reddit = (props) => {
  const url = encodeURIComponent(props.url);
  const redditUrl = `https://www.reddit.com/submit?url=${url}`;
  
  return (
    <div style={props.styles.row}>
      <a href={redditUrl} style={{ textDecoration: 'none' }}>
        <Grid item
          role="button">
          <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Reddit-logo-true.png' style={props.styles.topIcon} />
          <Typography variant='caption'>Reddit</Typography>
        </Grid>
      </a>
    </div>
  );
};

export default Reddit;