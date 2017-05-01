import { combineReducers } from 'redux';

const username = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_REGISTER_USERNAME':
      return action.username;
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
    case 'UPDATE_REGISTER_PASSWORD':
      return action.password;
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
    default:
      return state;
  }
};

// const genreqs = (state = 0, action) => {};

const settings = (state = [
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
], action) => {
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

export const Student = Object.assign({}, {
  username,
  password,
  entryYear,
  major,
  plannedCourses,
  completedCourses,
  loggedIn,
  // waiting to add genreqs until Progress Tracker stuff makes sense
  settings,
});

const StudentReducer = combineReducers({
  username,
  password,
  entryYear,
  major,
  plannedCourses,
  completedCourses,
  loggedIn,
  // waiting to add genreqs until Progress Tracker stuff makes sense
  settings,
});

export default StudentReducer;
