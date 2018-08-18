let defaultState = {
  service: 
    {
      name: '',
      subheading: '',
      logo_url: '',
      career_name: ''
    }
  
};

const trainingServiceReducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'SERVICE':
    return Object.assign({}, {service: action.payload.training});
  default: return state;
  }
};

export default trainingServiceReducers;