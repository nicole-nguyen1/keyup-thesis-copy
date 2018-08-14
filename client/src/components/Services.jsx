import React from 'react';
import Service from './Service.jsx';
import Grid from '@material-ui/core/Grid';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findServices } from '../actions/action';
import { store } from '../store/index';

class Services extends React.Component {
  constructor(props) {
    super(props);
    const career_id = +props.router.match.params.id || null;
    this.state = {
      career_id
    }
    this.fetch = createApolloFetch({ uri: '../graphql' }).bind(this);
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
      }`
    }).then(res => {
      console.log('res data in app file in graphql request', res.data);
      store.dispatch(findServices(res.data));
    }).then(() => {
      console.log(store.getState());
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={8}>
          {this.props.services.map((service, index) => {
            return <Service key={service.id || index} service={service} />;
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.services.services,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findServices }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
