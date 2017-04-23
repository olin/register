import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import AccountPageReducer from './AccountPageReducer';
import PersistReducer from './PersistReducer';

const registerApp = combineReducers({
  AccountPageReducer,
  LoginReducer,
  RegisterReducer,
  PersistReducer,
});

export default registerApp;
