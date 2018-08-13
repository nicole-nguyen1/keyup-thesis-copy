import React from 'react';
import NavBar from './NavBar.jsx';
import Intro from './homePageComponents/Intro.jsx';
import App from './App.jsx';
import FormHomePage from './homePageComponents/FormHomePage.jsx';
import About from './homePageComponents/About.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Intro />
        <About />
        <FormHomePage />
      </div>
    );
  }
}

export default Home;