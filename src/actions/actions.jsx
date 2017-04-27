import $ from 'jquery';

export const updateGenReq = genreqs => ({
  type: 'IS_GEN_REQ',
  genreqs,
});

export const updateMajorReq = majorreqs => ({
  type: 'IS_MAJOR_REQ',
  majorreqs,
});

export const updateMathsci = mathsci => ({
  type: 'IS_MATHSCI_REQ',
  mathsci,
});

export const updateAhse = ahse => ({
  type: 'IS_AHSE_REQ',
  ahse,
});

export const updateEngr = engr => ({
  type: 'IS_ENGR_REQ',
  engr,
});

export const resetReq = (genreqs, majorreqs, mathsci, ahse, engr) => ({
  type: 'RESET_REQ',
  genreqs,
  majorreqs,
  mathsci,
  ahse,
  engr,
});

// Progress Tracker Component
export const resolvedGetCourses = data => ({
  type: 'GET_COMPLETED_COURSES',
  data: data.completedcourses,
});

// Account Page Component
export const toggleSetting = name => ({
  type: 'TOGGLE_SETTING',
  name,
});

// Login Component
export const updatePassword = password => ({
  type: 'UPDATE_PASSWORD',
  password,
});

export const updateUsername = username => ({
  type: 'UPDATE_USERNAME',
  username,
});

// Register Component
export const updateRegisterUsername = username => ({
  type: 'UPDATE_REGISTER_USERNAME',
  username,
});

export const updateRegisterPassword = password => ({
  type: 'UPDATE_REGISTER_PASSWORD',
  password,
});

// Login backend interaction
export const receiveUser = json => ({
  type: 'RECEIVE_USER',
  username: json.user.username,
  id: json.user.id,
  major: json.user.major,
  plannedCourses: json.user.plannedCourses,
  completedCourses: json.user.completedCourses,
  courses: json.courses,
});

// Get completed courses from backend
export const getCourses = data => (
  (dispatch) => {
    $.get('/completedcourses', data)
      .done(response => (dispatch(resolvedGetCourses(response))))
      .fail((err, status) => console.error(err, status));
  }
);

export const login = (username, password) => (
  (dispatch) => {
    const data = {
      username,
      password,
    };
    $.post('/login', data)
      .done(response => dispatch(receiveUser(response)))
      .fail((err, status) => console.error(err, status));
  }
);
// Register backend interaction
export const register = (username, password) => (
  (dispatch) => {
    const data = {
      username,
      password,
    };
    $.post('/register', data)
      .done(response => (dispatch(receiveUser(response))))
      .fail((err, status) => console.error(err, status));
  }
);
