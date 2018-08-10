let defaultState = {
  careers: [
    {
      name: 'Dentist',
      salary: 5
    },
    {
      name: 'Engineer',
      salary: 6
    },
    {
      name: 'Coding',
      salary: 2
    }
  ]
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'CAREERS':
    return Object.assign({}, defaultState.careers);
  default: return state;
  }
};

export default reducers;