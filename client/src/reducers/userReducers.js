let defaultState = {
  user: 
    {
      email: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      zip: ''
    }
  
};

const userReducers = (state = defaultState, action) => {
  switch (action.type) {
  case 'USER':
    return Object.assign({}, {user: action.payload});
  default: return state;
  }
};

export default userReducers;