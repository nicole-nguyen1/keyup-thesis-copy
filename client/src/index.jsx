import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, 
  document.getElementById('app')
);


