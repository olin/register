const initialState = {
  genreqs: '0',
  majorreqs: '0',
};

const ProgressTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMPLETED_COURSES':
      console.log(action.data);
      var data = action.data;
      var result = data.map(function(a) {return a.courseId;});
      console.log(result);
      console.log(state);
      return Object.assign({}, state, {
        genreqs: result,
        majorreqs: result,
      });
    default:
      return state;
  }
};

export default ProgressTrackerReducer;
