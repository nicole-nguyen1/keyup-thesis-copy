let defaultState = {
  examplePropOne: 'example',
  examplePropTwo: 'test'
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'EXAMPLE': 
      return Object.assign({}, defaultState, {examplePropOne: 'newPropOne'})      
    case 'EXAMPLE-TWO':
      return Object.assign({}, defaultState, {examplePropTwo: action.payload})
    default: return state;
  }
}

export default reducers;