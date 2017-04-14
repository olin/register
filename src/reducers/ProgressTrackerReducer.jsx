import { GET_COURSES } from '../actions/actions';

const initialState = {
  genreqs: '0',
  majorreqs: '0',
};

const ProgressTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return Object.assign({}, state, {
      	genreqs: action.data,
      });
    default:
      return state;
  }
};

export default ProgressTrackerReducer;
