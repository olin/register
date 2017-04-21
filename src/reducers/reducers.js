import { combineReducers } from 'redux';
import ProgressTrackerReducer from './ProgressTrackerReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import AccountPageReducer from './AccountPageReducer';
import PersistReducer from './PersistReducer';

const registerApp = combineReducers({
  AccountPageReducer,
  LoginReducer,
  RegisterReducer,
  ProgressTrackerReducer,
  PersistReducer,
});

export default registerApp;
