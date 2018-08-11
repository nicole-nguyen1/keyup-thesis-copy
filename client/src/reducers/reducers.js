let defaultState = {
  careers: [
    {
      name: '',
      salary: 5
    }
  ]
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'CAREERS':
    return Object.assign({}, action.payload);
  default: return state;
  }
};

export default reducers;