import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/reducers';
import serviceReducers from '../reducers/serviceReducers';

export const store = createStore(
  combineReducers({
    careers: reducers,
    services: serviceReducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


