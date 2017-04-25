import $ from 'jquery';

export const updateGenReq = (genreqs) => ({
  type: 'IS_GEN_REQ',
  genreqs,
});

export const updateMajorReq = (majorreqs) => ({
  type: 'IS_MAJOR_REQ',
  majorreqs,
});

export const resetReq = (genreqs, majorreqs) => ({
  type: 'RESET_REQ',
  genreqs,
  majorreqs,
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
  username: json.username,
  id: json._id,
  major: json.major,
  plannedCourses: json.plannedCourses,
  completedCourses: json.completedCourses,
});

// Get completed courses from backend
export const getCourses = (data) => (
  (dispatch) => {
    $.get('/completedcourses', data)
      .done(response => (dispatch(resolvedGetCourses(response))))
      .fail((err, status) => console.log(err, status));
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
      .fail((err, status) => console.log(err, status));
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
      .fail((err, status) => console.log(err, status));
  }
);
