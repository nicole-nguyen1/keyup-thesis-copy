import React from 'react';
import NavBar from './NavBar.jsx';
import Intro from './homePageComponents/Intro.jsx';
import FormHomePage from './homePageComponents/FormHomePage.jsx';
import Footer from './homePageComponents/Footer.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar />
        <Intro />
        <FormHomePage />
        <Footer />
      </div>
    );
  }
}

export default Home;