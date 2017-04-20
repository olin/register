import { combineReducers } from 'redux';
import ProgressTrackerReducer from './ProgressTrackerReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import AccountPageReducer from './AccountPageReducer';

const registerApp = combineReducers({
  AccountPageReducer,
  LoginReducer,
  RegisterReducer,
  ProgressTrackerReducer,
});

export default registerApp;
