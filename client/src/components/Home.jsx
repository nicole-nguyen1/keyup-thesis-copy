import React from 'react';
import Intro from './homePageComponents/Intro.jsx';
import FormHomePage from './homePageComponents/FormHomePage.jsx';
import About from './homePageComponents/About.jsx';
import HomePageCards from './homePageComponents/HomePageCards.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Intro />
        <HomePageCards />
        <About />
        <FormHomePage />
      </div>
    );
  }
}

export default Home;