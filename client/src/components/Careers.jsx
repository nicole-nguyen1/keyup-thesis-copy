import React from 'react';
import Career from './Career.jsx';
import Grid from '@material-ui/core/Grid';
import FilterandSort from './filterAndSortComponents/FilterAndSort.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../actions/action';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: '#CFCFCE',
    paddingBottom: '1px',
    borderRadius: '0'
  },

  grid: {
    margin: '8px auto',
    width: '97%',
    [theme.breakpoints.up('sm')]: {
      // width: '390px'
      width: '589px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '589px'
    }
  }
});

class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    store.dispatch(getPageTitle('Career List'));
    this.props.getUser();
  }

  render() {
    const { classes } = this.props;
    const faves = this.props.favorites.favorites;
    return (
      <div className={classes.background}>
        <FilterandSort 
          industries={this.props.industries}
          filterCareers={this.props.filterCareers}
        />
        <Grid container className={classes.grid}>
          {this.props.careers.map((career, index) => {
            return <Career
              key={career.id || index} 
              career={career} 
              favorites={faves}
              removeFavorite={this.props.removeFavorite}
              addFavorite={this.props.addFavorite}
            />;
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
  return bindActionCreators({ getPageTitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Careers));