import React from 'react';
import CareerCard from './CareerCard.jsx';
import Grid from '@material-ui/core/Grid';
import FilterandSort from '../filterAndSortCareerComponents/FilterAndSortButton.jsx';
import GoSignInDialog from '../reusableComponents/GoSignInDialog.jsx';
import { store } from '../../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../../actions/action';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: '#CFCFCE',
    paddingBottom: '1px',
    borderRadius: '0'
  },

  grid: {
    margin: '8px auto',
    width: '97%'
  }
});

class CareersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPopUp: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    store.dispatch(getPageTitle('Career List'));
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
            return <CareerCard
              key={career.id || index} 
              career={career} 
              favorites={faves}
              removeFavorite={this.props.removeFavorite}
              addFavorite={this.props.addFavorite}
              handlePopUp={this.handlePopUp}
            />;
          })}
        </Grid>
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
    pages: state.pages.page
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CareersList));