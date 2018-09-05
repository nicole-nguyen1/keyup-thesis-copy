import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store';
import { findService } from '../actions/action';
import { getPageTitle } from '../actions/action';
import { getServiceQuery } from '../components/graphql/graphql';
import TrainingServiceProfile from '../components/trainingServiceProfileComponents/TrainingServiceProfile.jsx';
import GoSignInDialog from '../components/reusableComponents/GoSignInDialog.jsx';

class TrainingServiceProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    const service_id = +props.router.match.params.id || null;
    this.fetch = createApolloFetch({ uri: '../graphql' }).bind(this);
    this.state = {
      service_id,
      renderPopUp: false
    };
  }

  componentDidMount() {
    this.fetch({
      query: getServiceQuery(this.state.service_id)
    }).then(res => {
      store.dispatch(findService(res.data));
      store.dispatch(getPageTitle(res.data.training.name));
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
    return (
      <div>
        <TrainingServiceProfile 
          service={this.props.service} 
          favorites={this.props.favorites.favorites}
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
    service: state.trainingService.service
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findService }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingServiceProfileContainer);