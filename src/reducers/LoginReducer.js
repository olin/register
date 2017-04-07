const initialState = {
  user: {
    username: '',
    password: '',
  },
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return Object.assign({}, state, {
        user: action.username,
      });
    case 'UPDATE_PASSWORD':
      return Object.assign({}, state, {
        password: action.password,
      });
    default:
      return state;
  }
};

export default LoginReducer;
