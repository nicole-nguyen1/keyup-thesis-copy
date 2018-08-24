import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/reducers';
import industryReducers from '../reducers/industryReducers';
import pageTitleReducers from '../reducers/pageTitleReducers';
import serviceReducers from '../reducers/serviceReducers';
import careerReducers from '../reducers/careerReducers';
import trainingServiceReducers from '../reducers/trainingServiceReducers';
import userReducers from '../reducers/userReducers';
import favoritesReducers from '../reducers/favoritesReducers';

export const store = createStore(
  combineReducers({
    industries: industryReducers,
    careers: reducers,
    pages: pageTitleReducers,
    career: careerReducers,
    trainingService: trainingServiceReducers,
    services: serviceReducers,
    user: userReducers,
    favorites: favoritesReducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
