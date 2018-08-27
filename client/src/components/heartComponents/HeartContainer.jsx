import React from 'react';
import HeartButton from './HeartButton.jsx';
class HeartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: 20,
      isFavorite: false
    };
    this.updateArgs = {
      serviceID: this.props.serviceID || null,
      careerID: this.props.careerID || null,
      favoriteID: '',
    }
  }

  componentDidMount () {
    this.isFavorite();
  }

  componentDidUpdate(prevProps) {
    if (this.props.favorites !== prevProps.favorites) {
      this.isFavorite();
    }
  } 

  isFavorite = () => {
    let favoriteFound = false;
    if (this.props.careerID !== undefined && this.props.favorites !== undefined) {
        for(let favorite in this.props.favorites) {
          if (this.props.favorites[favorite].career_id === this.props.careerID) {
            this.updateArgs.favoriteID = this.props.favorites[favorite].id;
            console.log(`${this.props.careerID} is selected`);
            favoriteFound = true;
            this.turnMeBlue()
            break;
          }
        }
    } else if (this.props.serviceID !== undefined && this.props.favorites !== undefined) {
      for(let favorite in this.props.favorites) {
        if (this.props.favorites[favorite].service_id === this.props.serviceID) {
          this.updateArgs.favoriteID = this.props.favorites[favorite].id;
          console.log(`${this.props.serviceID} is selected`);
          this.turnMeBlue();
          favoriteFound = true;
          break;
        }
      }
    }
  }

  turnMeBlue = () => {
    this.setState({
      isFavorite: true
    })
  }

  removeFavorite = () => {
    this.setState({
      isFavorite: false
    })
    console.log(`args`, this.updateArgs);
    this.props.removeFavorite(this.updateArgs.favoriteID);
  }

  addFavorite = () => {
    this.setState({
      isFavorite: true
    })
    this.props.addFavorite(this.updateArgs);
  }

  render() {
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

export default HeartContainer;