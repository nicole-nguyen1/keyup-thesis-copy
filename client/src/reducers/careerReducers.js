let defaultState = {
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

const careerReducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'CAREER':
    return Object.assign({}, action.payload);
  default: return state;
  }
};

export default careerReducers;