import React from 'react';
import Service from './Service.jsx';
import Grid from '@material-ui/core/Grid';
import FilterAndSort from './filterSortServicesComponents/FilterAndSort.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../actions/action';

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Training List'));
  }

  render() {
    return (
      <div>
        <FilterAndSort services={this.props.services} careerID={this.props.careerID}/>
        <Grid container spacing={8}>
          {this.props.services.map((service, index) => {
            return <Service key={service.id || index} service={service}/>;
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages.page
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
