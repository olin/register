import { combineReducers } from 'redux';
import ProgressTrackerReducer from './ProgressTrackerReducer';
import StudentReducer, { Student } from './StudentReducer';
import CoursePlannerReducer from './CoursePlannerReducer';
import PersistReducer from './PersistReducer';
import ReqsReducer from './ReqsReducer';

console.log(Student);

const registerApp = combineReducers(Student);

export default registerApp;
