import { combineReducers } from 'redux';
import Student from './Student';
import Major from './Major';
import Courses from './Courses';
import Progress from './Progress';
import CoursePlanner from './CoursePlanner';
import Persist from './Persist';

const registerApp = combineReducers({
  Student,
  Major,
  Courses,
  Progress,
  CoursePlanner,
  Persist,
});

export default registerApp;
