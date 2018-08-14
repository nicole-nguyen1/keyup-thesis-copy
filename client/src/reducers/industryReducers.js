let defaultState = {
  industries: [
    {
      id: '',
      name: ''
    }
  ]
};
  
const industryReducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'INDUSTRIES':
    return Object.assign({}, action.payload);
  default: return state;
  }
};
  
export default industryReducers;