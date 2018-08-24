let defaultState = {
  favorites: [
    {
      id: '',
      career: [{
        name: '',
        industry_name: '',
        card_pro: '',
        card_image_url: '',
        annual_salary: '',
        training_length: ''
      }],
      training_service: [{
        career_name: '',
        name: '',
        logo_url: '',
        card_length: '',
        card_tuition: '',
        card_location: ''
      }]
    }
  ]
};

const favoritesReducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'FAVORITE':
      return Object.assign({}, action.payload);
    default: return state;
  }
};

export default favoritesReducers;