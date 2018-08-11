import React from 'react';
import NavBar from './NavBar.jsx';
import Intro from './homePageComponents/Intro.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar />
        <Intro />
      </div>
    )
  }
}

export default Home;