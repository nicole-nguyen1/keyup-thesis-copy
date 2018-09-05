import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Twitter = (props) => {
  const url = encodeURIComponent(props.url);
  const text = encodeURIComponent('I\'m using KeyUp to explore careers, training services, and support services! Check out this link: ');
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

  return (
    <div style={props.styles.row}>
      <a href={twitterUrl} style={{ textDecoration: 'none' }}>
        <Grid item
          role="button">
          <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Twitter-Logo-True.png' style={props.styles.topIcon} />
          <Typography variant='caption'>Twitter</Typography>
        </Grid>
      </a>
    </div>
  );
};

export default Twitter;