import React from 'react';
import Service from './Service.jsx';
import Grid from '@material-ui/core/Grid';
import FilterAndSort from './filterSortServicesComponents/FilterAndSort.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../actions/action';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core';


const styles = theme => ({
  background: {
    backgroundColor: '#CFCFCE'
  },

  grid: {
    marginTop: '8px'
  },

  popUpText: {
    color: '#88888A',
    textAlign: 'left'
  },

  popUpTitle: {
    padding: '20px 10px 20px 10px', 
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
    margin: '0 auto',
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
    padding: '0',
    // alignSelf: 'flex-end'
  }
});
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPopUp: false
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Training List'));
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
    console.log('you are looking at a list of training services')
    if (this.state.renderPopUp) {
      console.log('you really need to delete all of these console logs')
    }
    return (
      <div className={classes.background}>
        <FilterAndSort services={this.props.services} careerID={this.props.careerID}/>
        <Grid container className={classes.grid}>
          {this.props.services.map((service, index) => {
            return <Service 
              key={service.id || index} 
              service={service} 
              careerName={this.props.careerName} 
              favorites={this.props.favorites.favorites}
              removeFavorite={this.props.removeFavorite}
              addFavorite={this.props.addFavorite}
              handlePopUp={this.handlePopUp}
            />;
          })}
        </Grid>
        <Dialog open={this.state.renderPopUp} maxWidth={"xs"}>
         <DialogTitle className={classes.popUpTitle}>
           {"Sign In or Create Account"}
         </DialogTitle>
         <DialogContent>
           <Typography variant='body1' className={classes.popUpText}>
             Sign in or create an account to save your favorite career and training options. 
           </Typography>
         </DialogContent>
         <DialogActions>
           <div className={classes.buttons}>
            <div>
              <Link to='/login' className={classes.link}>
                <Button 
                  variant="contained"
                  className={classes.buttonStyle}
                >
                  SIGN IN
                </Button>
              </Link>
            </div>
            <div>
              <Link to='/signup' className={classes.link}>
                <Button
                  className={classes.createButtonStyle}
                  >
                    CREATE AN ACCOUNT
                  </Button>
              </Link>
            </div>
            <div>
              <Button onClick={this.handleClose} className={classes.cancelButton}>
                CANCEL
              </Button>
            </div>
           </div>
         </DialogActions>
        </Dialog>
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
