import React from 'react';
import Intro from './homePageComponents/Intro.jsx';
import SubmitFormHomePage from './homePageComponents/SubmitFormHomePage.jsx';
import About from './homePageComponents/About.jsx';
import HowItWorks from './homePageComponents/HowItWorks.jsx';
import HomePageCards from './homePageComponents/HomePageCards.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
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
          <SubmitFormHomePage />
        </div>
        <HowItWorks />
      </div>
    );
  }
}

export default Home;