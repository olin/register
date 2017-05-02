const initialState = {
  generalRequirements: [],
  majorRequirements: [],
};

const RequirementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_REQUIREMENTS':
      return Object.assign({}, state, {
        generalRequirements: action.generalRequirements,
        majorRequirements: action.majorRequirements,
      });
    default:
      return state;
  }
};

export default RequirementsReducer;
