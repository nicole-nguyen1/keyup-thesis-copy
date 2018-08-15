import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findCareer } from '../actions/action';
import { store } from '../store/index';
import CareerProfile from './CareerProfile.jsx';

class CareerProfileContainer extends React.Component {
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
        career(id:${this.state.career_id}) {
          name
          profile_image_url
          industry_name
          description
          annual_salary
          hourly_pay
          openings
          tasks {
            id
            description
          }
          skills {
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
          number_of_services
          training_length
          training_hours
          training_cost
        }
      }`
    }).then(res => {
      store.dispatch(findCareer(res.data));
    }).then(()=>{
      console.log(this.props);
    });
  }

//<CareerProfile career={this.props.career}/>

  render() {
    return (
      <CareerProfile career={this.props.career}/>
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