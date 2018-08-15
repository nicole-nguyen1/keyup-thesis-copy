import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/reducers';
import industryReducers from '../reducers/industryReducers';
import pageTitleReducers from '../reducers/pageTitleReducers';
import serviceReducers from '../reducers/serviceReducers';
import careerReducers from '../reducers/careerReducers';

export const store = createStore(
  combineReducers({
    industries: industryReducers,
    careers: reducers,
    pages: pageTitleReducers,
    services: serviceReducers,
    career: careerReducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
