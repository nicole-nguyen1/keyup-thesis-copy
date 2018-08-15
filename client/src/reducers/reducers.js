let defaultState = {
  careers: [
    {
      name: '',
      annual_salary: '',
      training_length: '',
      description: '',
      training_hours: '',
      card_image_url: '',
      card_pro: ''
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