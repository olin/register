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
  type: 'UPDATE_MATHSCI_REQ',
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
  data: data.completedcourses,
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

// Semester Plan Component
export const changeSemester = (courseId, newSemester) => ({
  // dispatched when course block dropped into new semester
  type: 'CHANGE_SEMESTER',
  courseId,
  newSemester,
});

// Course Planner Dropdown Component
export const selectCourse = (catId, courseCode) => ({
  type: 'SELECT_COURSE',
  catId,
  courseCode,
});

export const addCourse = course => ({
  type: 'ADD_COURSE',
  course,
});

export const removeCourse = courseCode => ({
  type: 'REMOVE_COURSE',
  courseCode,
});

// Course Planner Search Component
export const updateSearchField = newValue => ({
  type: 'UPDATE_SEARCH_FIELD',
  newValue,
});

export const updateSuggestions = suggestions => ({
  type: 'UPDATE_SUGGESTIONS',
  suggestions,
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
  name: json.user.name,
  id: json.user.id,
  entryYear: json.user.entryYear,
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

// Get graduation requirements from backend
export const getRequirements = data => (
  (dispatch) => {
    $.get('/requirements', data)
      .done(response => (dispatch(receiveRequirements(response))))
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
