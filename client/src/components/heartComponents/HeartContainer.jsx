import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
class HeartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.classes.icon,
      iconSize: 20
    };
    
  }

  componentDidMount () {
    this.isFavorite();
  }

  isFavorite = () => {
    console.log('props in icon', this.props)
    if (this.props.careerID !== undefined && this.props.favorites !== undefined) {
        for(let favorite in this.props.favorites) {
          if (this.props.favorites[favorite].career_id === this.props.careerID) {
            console.log('favorite found:', this.props.careerID)
            this.turnMeBlue()
            break;
          }
        }
    } else if (this.props.serviceID !== undefined && this.props.favorites !== undefined) {
      for(let favorite in this.props.favorites) {
        if (this.props.favorites[favorite].service_id === this.props.serviceID) {
          console.log('favorite found:', this.props.serviceID)
          this.turnMeBlue()
        }
      }
    }
  }

  turnMeBlue = () => {
    this.setState({
      className: this.props.classes.favoriteSelected
    })
  }

  handleClick = () => {
    //add or remove item from favorites
    console.log('Fire off graphQL Mutation!!!!!!!!!!')
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