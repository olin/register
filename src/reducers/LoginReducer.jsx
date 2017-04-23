const initialState = {
  username: '',
  password: '',
  id: '',
  major: '',
  plannedCourses: [],
  completedCourses: [],
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
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        username: action.username,
        id: action.id,
        major: action.major,
        plannedCourses: action.plannedCourses,
        completedCourses: action.completedCourses,
        loggedIn: true,
      });
    default:
      return state;
  }
};

export default LoginReducer;
