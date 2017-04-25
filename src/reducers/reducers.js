import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import SettingsPageReducer from './SettingsPageReducer';
import CoursePlannerReducer from './CoursePlannerReducer';
import PersistReducer from './PersistReducer';

const registerApp = combineReducers({
  SettingsPageReducer,
  CoursePlannerReducer,
  LoginReducer,
  RegisterReducer,
  PersistReducer,
});

export default registerApp;
