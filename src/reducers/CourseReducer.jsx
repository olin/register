import { combineReducers } from 'redux';

const allCourses = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.courses;
    default:
      return state;
  }
};

const CourseReducer = combineReducers({
  allCourses,
});

export default CourseReducer;