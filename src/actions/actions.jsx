import $ from 'jquery';

export const updateGenReq = genreqs => ({
  type: 'UPDATE_GEN_REQ',
  genreqs,
});

export const updateMajorReq = majorreqs => ({
  type: 'UPDATE_MAJOR_REQ',
  majorreqs,
});

export const updateMathsci = mathsci => ({
  type: 'UPDATE_MATHSCI',
  mathsci,
});

export const updateAhse = ahse => ({
  type: 'UPDATE_AHSE',
  ahse,
});

export const updateEngr = engr => ({
  type: 'UPDATE_ENGR',
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
  completedCourses: data.completedcourses,
});

// Requirements Component
export const receiveRequirements = data => ({
  type: 'RECEIVE_REQUIREMENTS',
  generalRequirements: data.generalRequirements,
  majorRequirements: data.majorRequirements,
});

// Settings Page Component
export const toggleSetting = name => ({
  type: 'TOGGLE_SETTING',
  name,
});

// dispatched when course block dropped into new semester
export const changeSemester = (courseId, newSemester) => ({
  type: 'CHANGE_SEMESTER',
  courseId,
  newSemester,
});

// update selected course in course planner dropdown
export const selectCourse = (catId, courseId) => ({
  type: 'SELECT_COURSE',
  catId,
  courseId,
});

// login or register action successful
export const receiveUser = json => ({
  type: 'RECEIVE_USER',
  username: json.user.username,
  name: json.user.name,
  id: json.user.id,
  entryYear: json.user.entryYear,
  major: json.user.major,
  plannedCourses: json.user.plannedCourses,
  completedCourses: json.user.completedCourses,
  courses: json.courses,
});

// register action unsuccessful
export const registerError = message => ({
  type: 'REGISTER_ERROR',
  message,
});

// login action unsuccessful
export const loginError = message => ({
  type: 'LOGIN_ERROR',
  message,
});

// Logout Component
export const logoutUser = data => ({
  type: 'LOGOUT_USER',
  data,
});

// logout
export const logout = data => (
  (dispatch) => {
    $.get('/logout', data)
      .done(response => (dispatch(logoutUser(response))))
      .fail((err, status) => console.error(err, status));
  }
);

// login backend interaction
export const login = (username, password) => (
  (dispatch) => {
    const data = {
      username,
      password,
    };
    $.post('/login', data)
      .done(response => dispatch(receiveUser(response)))
      .fail((err) => {
        const message = 'Error ' + err.status + ': ' + err.responseText;
        dispatch(loginError(message));
      });
  }
);

// register backend interaction
export const register = (username, password) => (
  (dispatch) => {
    const data = {
      username,
      password,
    };
    $.post('/register', data)
      .done(response => (dispatch(receiveUser(response))))
      .fail((err) => {
        const message = 'Error ' + err.status + ': ' + err.responseText;
        dispatch(registerError(message));
      });
  }
);

// update login form username
export const updateUsername = username => ({
  type: 'UPDATE_USERNAME',
  username,
});

// update login form password
export const updatePassword = password => ({
  type: 'UPDATE_PASSWORD',
  password,
});

// update register form username
export const updateRegisterUsername = username => ({
  type: 'UPDATE_REGISTER_USERNAME',
  username,
});

// update register form password
export const updateRegisterPassword = password => ({
  type: 'UPDATE_REGISTER_PASSWORD',
  password,
});

// get completed courses from backend
export const getCourses = data => (
  (dispatch) => {
    $.get('/completedcourses', data)
      .done(response => (dispatch(resolvedGetCourses(response))))
      .fail((err, status) => console.error(err, status));
  }
);

// get graduation requirements from backend
export const getRequirements = data => (
  (dispatch) => {
    $.get('/requirements', data)
      .done(response => (dispatch(receiveRequirements(response))))
      .fail((err, status) => console.error(err, status));
  }
);
