const initialState = {
  genreqs: '0',
  majorreqs: '0',
};

const ProgressTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMPLETED_COURSES':
      console.log(action.data);
      return Object.assign({}, state, {
        genreqs: action.data.genreqs,
        majorreqs: action.data.majorreqs,
      });
    default:
      return state;
  }
};

export default ProgressTrackerReducer;
