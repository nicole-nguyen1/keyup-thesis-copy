import React from 'react';
import NavBar from './NavBar.jsx';
import Intro from './homePageComponents/Intro.jsx';
import App from './App.jsx';
import FormHomePage from './homePageComponents/FormHomePage.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Intro />
        <FormHomePage />
      </div>
    );
  }
}

export default Home;