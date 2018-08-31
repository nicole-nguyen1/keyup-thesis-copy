let defaultState = {
  services: [
    {
      id: '',
      career_id: '',
      career_name: '',
      name: '',
      subheading: '',
      logo_url: '',
      about: '',
      financial_info: '',
      location: '',
      app_process: '',
      apply_now_cta: '',
      program_url: '',
      program_length_total: '',
      program_total_weekly: '',
      program_class_times: '',
      paid_to_learn: '',
      federal_student_aid: '',
      card_length: '',
      card_location: '',
      page_title: '',
      outcomes: '',
      requirements: '',
      pros: '',
      cons: ''
    }
  ]
};

const serviceReducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'SERVICES':
    return Object.assign({}, { services: action.payload.trainings });
  default: return state;
  }
};

export default serviceReducers;