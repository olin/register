const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_USERNAME':
      return Object.assign({}, state, {
        username: action.username,
      });
    case 'UPDATE_NEW_PASSWORD':
      return Object.assign({}, state, {
        password: action.password,
      });
    case 'UPDATE_CONFIRM_PASSWORD':
      return Object.assign({}, state, {
        confirmPassword: action.password,
      });
    default
      return state;
  }
};

export default RegisterReducer;