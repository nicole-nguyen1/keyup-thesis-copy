let defaultState = {
  page: ''
};
  
const pageTitleReducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'PAGES':
    return Object.assign({}, { page: action.payload });
  default: return state;
  }
};

export default pageTitleReducers;


