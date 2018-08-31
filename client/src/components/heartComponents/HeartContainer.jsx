import React from 'react';
import HeartButton from './HeartButton.jsx';
class HeartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: 20,
      isFavorite: false
    };
    // this.updateArgs = {
    //   serviceID: this.props.serviceID || null,
    //   careerID: this.props.careerID || null,
    //   favoriteID: '',
    // }
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
    let updateArgs = {
      serviceID: this.props.serviceID || null,
      careerID: this.props.careerID || null,
      favoriteID: '',
    }
    let favoriteFound = false;
    if (this.props.careerID !== undefined && this.props.favorites !== undefined) {
        for(let favorite in this.props.favorites) {
          if (this.props.favorites[favorite].career_id === this.props.careerID) {
            updateArgs.favoriteID = this.props.favorites[favorite].id;
            favoriteFound = true;
            this.turnMeBlue()
            break;
          }
        }
    } else if (this.props.serviceID !== undefined && this.props.favorites !== undefined) {
      for(let favorite in this.props.favorites) {
        if (this.props.favorites[favorite].service_id === this.props.serviceID) {
          updateArgs.favoriteID = this.props.favorites[favorite].id;
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
    let updateArgs = {
      serviceID: this.props.serviceID || null,
      careerID: this.props.careerID || null,
      favoriteID: '',
    }
    this.setState({
      isFavorite: false
    })
    this.props.removeFavorite(updateArgs.favoriteID);
  }

  addFavorite = () => {
    let updateArgs = {
      serviceID: this.props.serviceID || null,
      careerID: this.props.careerID || null,
      favoriteID: '',
    }
    let token = localStorage.getItem('jwt');
      if (token) {
        this.setState({
          isFavorite: true
        })
        this.props.addFavorite(updateArgs);
      } else {
        this.props.handlePopUp();
      }
  }

  render() {
    console.log('*****', this.props.favorites)
    console.log('in heart container', this.props.serviceID)
    console.log('update args in render of heart container', this.updateArgs)
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