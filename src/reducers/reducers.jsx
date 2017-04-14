import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import AccountPageReducer from './AccountPageReducer';
import RequirementsReducer from './RequirementsReducer';

const registerApp = combineReducers({
  AccountPageReducer,
  LoginReducer,
  RegisterReducer,
  RequirementsReducer,
});

export default registerApp;
