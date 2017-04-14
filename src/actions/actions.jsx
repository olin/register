import $ from 'jquery';

// Account Page Component

export const toggleSetting = name => ({
  type: 'TOGGLE_SETTING',
  name,
});

// Graduation requirements by major

export const receiveRequirements = json => ({
  type: 'RECEIVE_REQUIREMENTS',
  generalRequirements: json.generalRequirements,
  majorRequirements: json.majorRequirements,
});

export const postRequirements = major => (
  (dispatch) => {
    const data = { major };
    $.post('/requirements', data)
      .done(json => dispatch(receiveRequirements(json)))
      .fail((err, status) => console.error(err, status));
  }
);

export const shouldPostRequirements = (state) => {
  const major = state.LoginReducer.major;
  const loggedIn = state.LoginReducer.loggedIn;
  if (!loggedIn || !major) return false;
  return true;
};

export const postRequirementsIfNeeded = major => (
  (dispatch, getState) => {
    if (shouldPostRequirements(getState())) {
      dispatch(postRequirements(major));
    }
  }
);

// Courses by requirements

export const receiveCoursesByReq = (requirement, json) => ({
  type: 'RECEIVE_COURSES_BY_REQ',
  requirement,
  courses: json.courses,
});

export const postCoursesByReq = requirement => (
  (dispatch) => {
    const data = { requirement };
    $.post('/coursesbyreq', data)
      .done(json => dispatch(receiveRequirements(requirement, json)))
      .fail((err, status) => console.error(err, status));
  }
);

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
export const updateNewUsername = username => ({
  type: 'UPDATE_NEW_USERNAME',
  username,
});

export const updateNewPassword = password => ({
  type: 'UPDATE_NEW_PASSWORD',
  password,
});

export const updateConfirmPassword = password => ({
  type: 'UPDATE_CONFIRM_PASSWORD',
  password,
});

// Login backend interaction
export const receiveUser = json => ({
  type: 'RECEIVE_USER',
  username: json.username,
  id: json._id,
  plannedCourses: json.plannedCourses,
  completedCourses: json.completedCourses,
  major: json.major,
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

