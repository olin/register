const initialState = {
  majorRequirements: [],
  generalRequirements: [],
};

const RequirementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_REQUIREMENTS':
      return Object.assign({}, state, {
        majorRequirements: action.majorRequirements,
        generalRequirements: action.generalRequirements,
      });
    default:
      return state;
  }
};

export default RequirementsReducer;
