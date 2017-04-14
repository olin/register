import { combineReducers } from 'redux';
import ProgressTrackerReducer from './ProgressTrackerReducer';

const registerApp = combineReducers({
  ProgressTrackerReducer,
});

export default registerApp;
