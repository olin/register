const sampleReducer = (state, action) => {
  switch (action.type) {
    case 'DO_A_THING':
      return Object.assign({}, state, {
        newthing: action.data,
      });
    default:
      return state;
  }
};

export default sampleReducer;
