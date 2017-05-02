import { combineReducers } from 'redux';

const username = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return action.username;
    case 'RECEIVE_USER':
      return action.username;
    default:
      return state;
  }
};

const password = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_PASSWORD':
      return action.password;
    case 'RECEIVE_USER':
      return '';
    default:
      return state;
  }
};

const registerUsername = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_REGISTER_USERNAME':
      return action.username;
    case 'RECEIVE_USER':
      return '';
    default:
      return state;
  }
};

const registerPassword = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_REGISTER_PASSWORD':
      return action.password;
    case 'RECEIVE_USER':
      return '';
    default:
      return state;
  }
};

const name = (state = '', action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.name;
    default:
      return state;
  }
};

const id = (state = '', action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.id;
    default:
      return state;
  }
};

export const entryYear = (state = 0, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.entryYear;
    default:
      return state;
  }
};

const major = (state = '', action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.major;
    default:
      return state;
  }
};

const plannedCourses = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.plannedCourses;
    case 'CHANGE_SEMESTER': {
      const isCourseMatch = course => course.courseId === action.courseId;
      const index = state.findIndex(isCourseMatch);
      const course = state[index];
      course.semester = action.newSemester;
      return state.slice(0, index).concat(course).concat(state.slice(index + 1));
    }
    default:
      return state;
  }
};

const completedCourses = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.completedCourses;
    default:
      return state;
  }
};

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return true;
    case 'LOGOUT_USER':
      return false;
    default:
      return state;
  }
};

const registerError = (state = '', action) => {
  switch (action.type) {
    case 'REGISTER_ERROR':
      return action.message;
    case 'RECEIVE_USER':
      return '';
    case 'UPDATE_REGISTER_USERNAME':
      return '';
    default:
      return state;
  }
};

const loginError = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return action.message;
    case 'RECEIVE_USER':
      return '';
    case 'UPDATE_USERNAME':
      return '';
    case 'UPDATE_PASSWORD':
      return '';
    default:
      return state;
  }
};

const settingsInitialState = [
  {
    name: 'setting1',
    checked: false,
  },
  {
    name: 'setting2',
    checked: false,
  },
  {
    name: 'setting3',
    checked: false,
  },
];

const settings = (state = settingsInitialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTING':
      return state.map((setting) => {
        if (setting.name === action.name) {
          return Object.assign({}, setting, {
            checked: !setting.checked,
          });
        }
        return setting;
      });
    default:
      return state;
  }
};

const Student = combineReducers({
  username,
  password,
  registerUsername,
  registerPassword,
  name,
  id,
  entryYear,
  major,
  plannedCourses,
  completedCourses,
  loggedIn,
  registerError,
  loginError,
  settings,
});

export default Student;
