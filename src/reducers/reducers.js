import { combineReducers } from 'redux';
import ProgressTrackerReducer from './ProgressTrackerReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import AccountPageReducer from './AccountPageReducer';
import PersistReducer from './PersistReducer';
import GenReqsReducer from './GenReqsReducer';
import MajorReqsReducer from './MajorReqsReducer';

const registerApp = combineReducers({
  AccountPageReducer,
  LoginReducer,
  RegisterReducer,
  ProgressTrackerReducer,
  PersistReducer,
  GenReqsReducer,
  MajorReqsReducer,
});

export default registerApp;
