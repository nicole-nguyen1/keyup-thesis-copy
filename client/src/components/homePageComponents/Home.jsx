import React from 'react';
import Intro from './Intro.jsx';
import SubmitFormHomePage from './SubmitFormHomePage.jsx';
import About from './About.jsx';
import HowItWorks from './HowItWorks.jsx';
import HomePageCards from './HomePageCards.jsx';
import { store } from '../../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../../actions/action';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, Typography } from '@material-ui/core';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordResetSuccess: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    store.dispatch(getPageTitle(''));
    this.props.getUser();
    if (this.props.router.location.state && this.props.router.location.state.passwordResetSuccess) {
      this.setState({ passwordResetSuccess: this.props.router.location.state.passwordResetSuccess });
    }
  }

  handleClose = (e) => {
    this.setState({
      passwordResetSuccess: false
    });
  }

  render() {
    return (
      <div style={{ marginLeft: '-1px' }}>
        <div id="intro">
          <Intro />
        </div>
        <HomePageCards />
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <SubmitFormHomePage />
        </div>
        <HowItWorks />
        <Dialog open={this.state.passwordResetSuccess}>
          <DialogTitle>
            Password Updated
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              You are logged in and ready to go.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              onClick={this.handleClose}
            >
              Okay
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);