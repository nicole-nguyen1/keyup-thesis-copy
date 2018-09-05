import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findCareer } from '../actions/action';
import { store } from '../store';
import CareerProfile from '../components/careerProfileComponents/CareerProfile.jsx';
import GoSignInDialog from '../components/reusableComponents/GoSignInDialog.jsx';
import { getCareerQuery } from '../components/graphql/graphql';
import { getPageTitle } from '../actions/action';


class CareerProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    const careerID = +props.router.match.params.id || null;
    this.fetch = createApolloFetch({ uri: '../graphql' }).bind(this);
    this.state = {
      renderPopUp: false,
      careerID
    };
  }

  componentDidMount() {
    this.fetch({
      query: getCareerQuery(this.state.careerID)
    }).then(res => {
      store.dispatch(findCareer(res.data));
      store.dispatch(getPageTitle(res.data.career.name));
    });
    this.props.getUser();
  }

  handlePopUp = () => {
    this.setState({
      renderPopUp: true
    });
  }

  handleClose = () => {
    this.setState({
      renderPopUp: false
    });
  }

  render() {
    const faves = this.props.favorites.favorites;
    return (
      <div>
        <CareerProfile 
          career={this.props.career} 
          careerID={this.state.careerID} 
          favorites={faves}
          removeFavorite={this.props.removeFavorite}
          addFavorite={this.props.addFavorite}
          handlePopUp={this.handlePopUp}
        />
        <GoSignInDialog 
          open={this.state.renderPopUp}
          onClose={this.handleClose}
          page={this.props.router.location.pathname}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    career: state.career.career,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findCareer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CareerProfileContainer);