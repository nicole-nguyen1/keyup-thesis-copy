import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findServices } from '../actions/action';
import { store } from '../store/index';
import Services from './Services.jsx';

class ServiceListContainer extends React.Component {
  constructor(props) {
    super(props);
    const career_id = +props.router.match.params.id || null;
    this.fetch = createApolloFetch({ uri: '../graphql' }).bind(this);
    this.state = {
      career_id,
    };
  }
  
  componentDidMount() {
    this.fetch({
      query: `{
        trainings(id:${this.state.career_id}) {
          id
          career_id
          name
          subheading
          logo_url
          about
          financial_info
          location
          app_process
          apply_now_cta
          program_url
          program_length_total
          program_total_weekly
          program_class_times
          paid_to_learn
          federal_student_aid
          card_length
          card_location
          card_tuition
          page_title
          outcomes {
            id
            description
          }
          requirements {
            id
            description
          }
          pros {
            id
            description
          }
          cons {
            id
            description
          }
        }
        career(id:${this.state.career_id}) {
          name
        }
      }`
    }).then(res => {
      store.dispatch(findServices(res.data));
    }).then(() => {
      console.log('check for career name', store.getState());
    });
  }

  render() {
    if (!this.props.services) {
      return <div>Loading...</div>
    } else {
      return <Services services={this.props.services} careerName={this.props.careerName}/>;
    }
  }
}

const mapStateToProps = state => {
  return {
    services: state.services.services,
    careerName: state.services.careerName
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findServices }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListContainer);
