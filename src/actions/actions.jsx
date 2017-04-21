import $ from 'jquery';

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
  id: json.id,
  major: json.major,
  plannedCourses: json.plannedCourses,
  completedCourses: json.completedCourses,
});

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

// Grab student courses from database

export const receiveCourses = json => ({
  type: 'RECEIVE_COURSES',
  courses: json.courses,
});

export const postCourses = (plannedCourseList, completedCourseList) => (
  (dispatch) => {
    const allCourses = plannedCourseList.concat(completedCourseList);
    const data = { courseIds: allCourses };
    $.post('/studentcourses', data)
      .done(response => (dispatch(receiveCourses(response))))
      .fail((err, status) => console.log(err, status));
  }
);
