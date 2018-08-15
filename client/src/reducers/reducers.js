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
  ],
  career: [
    {
      name: '',
      profile_image_url: '',
      industry_name: '',
      description: '',
      annual_salary: '',
      hourly_pay: '',
      openings: '',
      tasks: '',
      skills: '',
      pros: '',
      cons: '',
      number_of_services: '',
      training_length: '',
      training_hours: '',
      training_cost: ''
    }
  ]
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'CAREERS':
    return Object.assign({}, action.payload);
  case 'CAREER':
    return Object.assign({}, action.payload);
  default: return state;
  }
};

export default reducers;