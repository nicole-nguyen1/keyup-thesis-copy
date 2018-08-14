import React from 'react';
import Intro from './homePageComponents/Intro.jsx';
import FormHomePage from './homePageComponents/FormHomePage.jsx';
import About from './homePageComponents/About.jsx';
import HomePageCards from './homePageComponents/HomePageCards.jsx';
import FilterAndSort from './FilterAndSort.jsx';

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
        <FilterAndSort />
      </div>
    );
  }
}

export default Home;