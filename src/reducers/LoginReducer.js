const initialState = {
  username: '',
  password: '',
  loggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return Object.assign({}, state, {
        username: action.username,
      });
    case 'UPDATE_PASSWORD':
      return Object.assign({}, state, {
        password: action.password,
      });
    case 'TOGGLE_LOGGED_IN':
      return Object.assign({}, state, {
        loggedIn: !state.loggedIn,
      });
    default:
      return state;
  }
};

export default LoginReducer;
