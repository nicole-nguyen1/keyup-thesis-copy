import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class CopyLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
      copied: false
    }
  }

  render() {
    return (
      <div style={this.props.styles.row}>
        <CopyToClipboard
          text={this.state.url}
          onCopy={() => this.setState({ copied: true })}>
          <Grid item
            role="button"
            onClick={this.props.handleClick}>
            <img src='https://s3.amazonaws.com/key-up-assets/Link-symbol-black.png' style={this.props.styles.bottomIcon} />
            <Typography variant='caption'>Copy Link</Typography>
          </Grid>
        </CopyToClipboard>
      </div>
    )
  }
}

export default CopyLink;