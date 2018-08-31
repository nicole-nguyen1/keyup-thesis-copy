import React from 'react';
import Career from './Career.jsx';
import Grid from '@material-ui/core/Grid';
import FilterandSort from './filterAndSortComponents/FilterAndSort.jsx';
import GoSignInDialog from './GoSignInDialog.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../actions/action';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core';

const styles = theme => ({
  background: {
    backgroundColor: '#CFCFCE',
    paddingBottom: '1px',
    borderRadius: '0'
  },

  grid: {
    margin: '8px auto',
    width: '97%'
  },

  popUpText: {
    color: '#88888A',
    textAlign: 'left',
    padding: '0 15px 15px'
  },

  popUpTitle: {
    padding: '20px 15px', 
    textAlign: 'left'
  },

  buttonStyle: {
    backgroundColor: '#4469FF',
    color: 'white',
    borderRadius: 0,
    padding: '5px 30px',
    borderRadius: '2px',
    marginBottom: '20px',
    textDecoration: 'none',
    outline: 'none'
  },

  buttons: {
    // margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  createButtonStyle: {
    // float: 'left',
    fontWeight: 'bold',
    color: '#4469FF',
    borderRadius: '2px',
    padding: '5px 30px',
    marginBottom: '10px'
  },

  link: {
    textDecoration: 'none'
  },

  cancelButton: {
    float: 'right',
    fontWeight: 'bold',
    textAlign: 'right',
    padding: '0 15px',
    
    // alignSelf: 'flex-end'
  },

  cancelDiv: {
    display: 'flex',
    alignSelf: 'flex-end'
  }
});

class Careers extends React.Component {
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
    if (this.state.renderPopUp) {
      console.log('this worked')
    }
    console.log('props in careers', this.props)
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
              handlePopUp={this.handlePopUp}
            />;
          })}
        </Grid>
        <GoSignInDialog 
          open={this.state.renderPopUp}
          onClose={this.handleClose}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Careers));