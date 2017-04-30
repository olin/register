import { combineReducers } from 'redux';
import ProgressTrackerReducer from './ProgressTrackerReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import SettingsPageReducer from './SettingsPageReducer';
import CoursePlannerReducer from './CoursePlannerReducer';
import PersistReducer from './PersistReducer';
import ReqsReducer from './ReqsReducer';

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
