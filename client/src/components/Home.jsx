import React from 'react';
import Intro from './homePageComponents/Intro.jsx';
import FormHomePage from './homePageComponents/FormHomePage.jsx';
import About from './homePageComponents/About.jsx';
import HowItWorks from './homePageComponents/HowItWorks.jsx';
import HomePageCards from './homePageComponents/HomePageCards.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../actions/action';



class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    store.dispatch(getPageTitle(''));
  }

  render() {
    return (
      <div>
        <Intro />
        <HomePageCards />
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <FormHomePage />
        </div>
        <HowItWorks />
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