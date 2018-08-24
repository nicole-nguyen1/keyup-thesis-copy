import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  icon: {
    position: 'relative',
    top: '-4px',
    left: '10px',
    color: '#88888A',
    textAlign: 'right',
    flexDirection: 'column'
  },
  favoriteSelected: {
    position: 'relative',
    top: '-4px',
    left: '10px',
    color: '#7A94F4',
    textAlign: 'right',
    flexDirection: 'column'
  },
  buttonStyle: {
    flexDirection: 'column'
  },
  largeSize: {
    fontSize: 36
  }
});
class HeartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.classes.icon,
      iconSize: 20
    };

    
  }

  handleClick = () => {
    this.setState({
      className: this.props.classes.favoriteSelected
    })
  }

  

  render() {
    const { classes } = this.props;
    if(this.props.size === 'large') {
      this.state.iconSize = 36;
    }
    return (
      <Button classes={{label: classes.buttonStyle}} >
        <FavoriteIcon
          className={this.state.className}
          height={classes.largeSize.height}
          onClick={this.handleClick}
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

export default withStyles(styles)(HeartContainer);