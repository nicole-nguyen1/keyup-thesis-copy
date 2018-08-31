let defaultState = {
  favorites: [
    {
      id: '',
      career_id: '',
      service_id: '',
      user_id: ''
    }
  ]
};

const favoritesReducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'FAVORITE':
    return Object.assign({}, {favorites: action.payload});
  default: return state;
  }
};

export default favoritesReducers;