import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import { findService } from '../actions/action';
import { getPageTitle } from '../actions/action';
import { getServiceQuery } from './graphql/graphql';
import TrainingServiceProfile from './trainingServiceProfileComponents/TrainingServiceProfile.jsx';

class TrainingServiceProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    const service_id = +props.router.match.params.id || null;
    this.fetch = createApolloFetch({ uri: '../graphql' }).bind(this);
    this.state = {
      service_id
    };
  }

  componentDidMount() {
    this.fetch({
      query: getServiceQuery(this.state.service_id)
    }).then(res => {
      store.dispatch(findService(res.data));
      store.dispatch(getPageTitle(res.data.training.name));
    });
  }

  render() {
    return (
      <TrainingServiceProfile service={this.props.service}/>
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