import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, Typography } from '@material-ui/core';

const styles = theme => ({
  icon: {
    right: '8px',
    color: '#88888A'
  },
  favoriteSelected: {
    right: '8px',
    color: '#7A94F4'
  },
  buttonStyle: {
    flexDirection: 'column'
  },
  largeSize: {
    fontSize: 36
  }
});
class HeartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.classes.icon,
      iconSize: 20
    };
  }
  
  render() {
    const { classes } = this.props;
    if (this.props.size === 'large') {
      this.state.iconSize = 36;
    }
    if (this.props.isBlue) {
      this.state.className = this.props.classes.favoriteSelected;
    } else {
      this.state.className = this.props.classes.icon;
    }
    return (
      <Button classes={{ label: classes.buttonStyle }} onClick={this.props.handleClick}>
        <FavoriteIcon
          className={this.state.className}
          height={classes.largeSize.height}
          // onClick={this.props.handleClick}
          style={{ fontSize: this.state.iconSize }}
        />
        <Typography 
          gutterBottom
          variant='body1'  
          className={this.state.className}
        >
          {this.props.profile === true ?
            'FAVORITE' :
            ' '
          }
        </Typography>
      </Button>
    );
  }
}

export default withStyles(styles)(HeartButton);