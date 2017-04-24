const initialState = {
  isGenReq: false,
};

const GenReqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_GEN_REQ':
      return Object.assign({}, state, {
        isGenReq: true,
      });
    case 'RESET_GEN_REQ':
      return Object.assign({}, state, {
        isGenReq: false,
      });
    default:
      return state;
  }
};

export default GenReqsReducer;
