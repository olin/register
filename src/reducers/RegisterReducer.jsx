const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REGISTER_USERNAME':
      return Object.assign({}, state, {
        username: action.username,
      });
    case 'UPDATE_REGISTER_PASSWORD':
      return Object.assign({}, state, {
        password: action.password,
      });
    default:
      return state;
  }
};

export default RegisterReducer;
