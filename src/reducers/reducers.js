import { combineReducers } from 'redux';
import ProgressTrackerReducer from './ProgressTrackerReducer';
import StudentReducer from './StudentReducer';
import CourseReducer from './CourseReducer';
import CoursePlannerReducer from './CoursePlannerReducer';
import PersistReducer from './PersistReducer';
import ReqsReducer from './ReqsReducer';


console.log(SettingsPageReducer);
const registerApp = combineReducers({
  SettingsPageReducer,
  CoursePlannerReducer,
  LoginReducer,
  RegisterReducer,
  ProgressTrackerReducer,
  PersistReducer,
  ReqsReducer,
});

export default registerApp;
