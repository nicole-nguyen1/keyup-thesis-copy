import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/reducers';
import industryReducers from '../reducers/industryReducers';

export const store = createStore(
  combineReducers({
    industries: industryReducers,
    careers: reducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
