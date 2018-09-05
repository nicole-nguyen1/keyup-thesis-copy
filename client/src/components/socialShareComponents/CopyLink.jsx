import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class CopyLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  render() {
    return (
      <div style={this.props.styles.row}>
        <CopyToClipboard
          text={this.props.url}
          onCopy={() => this.setState({ copied: true })}>
          <Grid item
            role="button"
            onClick={this.props.handleClick}>
            <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Link-symbol-black.png' style={this.props.styles.bottomIcon} />
            <Typography variant='caption'>Copy Link</Typography>
          </Grid>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CopyLink;