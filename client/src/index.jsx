import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import { HashRouter } from 'react-router-dom';


render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>, 
  document.getElementById('app')
);


