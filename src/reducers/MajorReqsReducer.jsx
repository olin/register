const initialState = {
  isMajorReq: false,
};

const MajorReqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_MAJOR_REQ':
      return Object.assign({}, state, {
        isMajorReq: true,
      });
    case 'RESET_MAJOR_REQ':
      return Object.assign({}, state, {
        isMajorReq: false,
      });
    default:
      return state;
  }
};

export default MajorReqsReducer;
