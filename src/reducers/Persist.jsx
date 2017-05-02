const initialState = {};

const Persist = (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return Object.assign({}, state, {
        persistedState: action.payload,
      });
    default:
      return state;
  }
};

export default Persist;
