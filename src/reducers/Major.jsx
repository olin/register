import { combineReducers } from 'redux';

const generalRequirements = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_REQUIREMENTS':
      return action.generalRequirements;
    default:
      return state;
  }
};

const majorRequirements = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_REQUIREMENTS':
      return action.majorRequirements;
    default:
      return state;
  }
};

const Major = combineReducers({
  generalRequirements,
  majorRequirements,
});

export default Major;
