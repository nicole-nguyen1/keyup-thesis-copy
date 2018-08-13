import React from 'react';
import NavBar from './NavBar.jsx';
import Intro from './homePageComponents/Intro.jsx';
import App from './App.jsx';
import { Switch, Route } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/careers" component={App} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;