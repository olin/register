const initialState = {
  isGenReq: false,
  isMajorReq: false,
};

const ReqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_GEN_REQ':
      return Object.assign({}, state, {
        isGenReq: true,
      });
    case 'IS_MAJOR_REQ':
      return Object.assign({}, state, {
        isMajorReq: true,
      });
    case 'RESET_REQ':
      return Object.assign({}, state, {
        isGenReq: false,
        isMajorReq: false,
      });
    default:
      return state;
  }
};

export default ReqsReducer;
