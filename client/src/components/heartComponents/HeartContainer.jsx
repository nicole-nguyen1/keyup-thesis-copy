import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HeartButton from './HeartButton.jsx';

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
      iconSize: 20,
      isFavorite: false
    };
    this.favoriteID = ''
  }

  componentDidMount () {
    this.isFavorite();
  }

  isFavorite = () => {
    if (this.props.careerID !== undefined && this.props.favorites !== undefined) {
        for(let favorite in this.props.favorites) {
          if (this.props.favorites[favorite].career_id === this.props.careerID) {
            console.log('favorite found:', this.props.careerID)
            this.favoriteID = this.props.favorites[favorite].id;
            this.turnMeBlue()
            break;
          }
        }
    } else if (this.props.serviceID !== undefined && this.props.favorites !== undefined) {
      for(let favorite in this.props.favorites) {
        if (this.props.favorites[favorite].service_id === this.props.serviceID) {
          console.log('favorite found:', this.props.serviceID)
          this.favoriteID = this.props.favorites[favorite].id;
          this.turnMeBlue();
          break;
        }
      }
    }
  }

  turnMeBlue = () => {
    this.setState({
      className: this.props.classes.favoriteSelected,
      isFavorite: true
    })
  }

  removeFavorite = () => {
    //add or remove item from favorites
    console.log('Remove a favorite from the list!!!!!!!!!!')
  }

  addFavorite = () => {
    console.log('Add a favorite to the list!!!!!')
    console.log(this.props)
    //this.props.serviceID
    //this.props.careerID
    //this.props.favorites
  }

  render() {
    const { classes } = this.props;
    return (
      this.state.isFavorite ?
        <HeartButton 
          size={this.props.size}
          profile={this.props.profile}
          isBlue={true}
          handleClick={this.removeFavorite}
        /> :
        <HeartButton 
          size={this.props.size}
          profile={this.props.profile}
          isBlue={false}
          handleClick={this.addFavorite}
        />
    )
  }
}

export default withStyles(styles)(HeartContainer);