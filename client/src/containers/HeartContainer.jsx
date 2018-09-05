import React from 'react';
import HeartButton from '../components/heartComponents/HeartButton.jsx';

class HeartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: 20,
      isFavorite: false,
      currentFavoriteID: ''
    };
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
      careerID: this.props.careerID || null
    };
    let favoriteFound = false;
    if (this.props.careerID !== undefined && this.props.favorites !== undefined) {
      for (let favorite in this.props.favorites) {
        if (this.props.favorites[favorite].career_id === this.props.careerID) {
          updateArgs.favoriteID = this.props.favorites[favorite].id;
          this.setState({
            currentFavoriteID: updateArgs.favoriteID
          });
          favoriteFound = true;
          this.turnMeBlue();
          break;
        } else {
          this.setState({ isFavorite: false });
        }
      }
    } else if (this.props.serviceID !== undefined && this.props.favorites !== undefined) {
      for (let favorite in this.props.favorites) {
        if (this.props.favorites[favorite].service_id === this.props.serviceID) {
          updateArgs.favoriteID = this.props.favorites[favorite].id;
          this.setState({
            currentFavoriteID: updateArgs.favoriteID
          });
          this.turnMeBlue();
          favoriteFound = true;
          break;
        } else {
          this.setState({ isFavorite: false });
        }
      }
    }
  }

  turnMeBlue = () => {
    this.setState({
      isFavorite: true
    });
  }

  removeFavorite = () => {
    let updateArgs = {
      serviceID: this.props.serviceID || null,
      careerID: this.props.careerID || null,
      favoriteID: this.state.currentFavoriteID || null,
    };
    this.setState({
      isFavorite: false
    });
    this.props.removeFavorite(updateArgs.favoriteID);
  }

  addFavorite = () => {
    let updateArgs = {
      serviceID: this.props.serviceID || null,
      careerID: this.props.careerID || null
    };
    let token = localStorage.getItem('jwt');
    if (token) {
      this.setState({
        isFavorite: true
      });
      this.props.addFavorite(updateArgs);
    } else {
      this.props.handlePopUp();
    }
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
    );
  }
}

export default HeartContainer;