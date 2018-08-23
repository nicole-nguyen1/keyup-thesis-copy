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
    height: '0.8em',
    color: '#7A94F4',
    textAlign: 'right'
  }
});
class HeartContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Button>
        <Typography 
          gutterBottom
          variant='body1'  
          className={classes.icon}
        >
          {this.props.profile === true ?
            'FAVORITE' :
            ' '
          }
        </Typography>
        <FavoriteIcon
          className={classes.icon}
        />
      </Button>
    );
  }
}

export default withStyles(styles)(HeartContainer);