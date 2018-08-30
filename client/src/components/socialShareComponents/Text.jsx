import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Text = (props) => {
  return (
    <div style={props.styles.row}>
      <Grid item
        role="button"
        onClick={props.handleClick}>
        <img src='https://s3.amazonaws.com/keyup-assets/Text-Icon.png' style={props.styles.bottomIcon} />
        <Typography variant='caption'>Text</Typography>
      </Grid>
    </div>
  )
}

export default Text;