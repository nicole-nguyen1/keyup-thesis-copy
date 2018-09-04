import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Text = (props) => {
  return (
    <div style={props.styles.row}>
      <Grid item
        role="button"
        onClick={props.handleClick}>
        <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Text-Icon.png' style={props.styles.bottomIcon} />
        <Typography variant='caption'>Text</Typography>
      </Grid>
    </div>
  );
};

export default Text;