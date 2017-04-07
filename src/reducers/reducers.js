import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import AccountPageReducer from './AccountPageReducer';

const registerApp = combineReducers({
  AccountPageReducer,
  LoginReducer,
});

export default registerApp;
