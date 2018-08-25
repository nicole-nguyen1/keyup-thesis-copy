import React from 'react';
import Service from './Service.jsx';
import Grid from '@material-ui/core/Grid';
import FilterAndSort from './filterSortServicesComponents/FilterAndSort.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../actions/action';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: '#CFCFCE'
  },

  grid: {
    marginTop: '8px'
  }
});
class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Training List'));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <FilterAndSort services={this.props.services} careerID={this.props.careerID}/>
        <Grid container className={classes.grid}>
          {this.props.services.map((service, index) => {
            return <Service key={service.id || index} service={service} careerName={this.props.careerName} favorites={this.props.favorites}/>;
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Services));
