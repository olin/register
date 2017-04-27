const initialState = {
  isGenReq: false,
  isMajorReq: false,
  isMathsci: false,
  isAhse: false,
  isEngr: false,
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
    case 'IS_MATHSCI_REQ':
      return Object.assign({}, state, {
        isMathsci: true,
      });
    case 'IS_AHSE_REQ':
      return Object.assign({}, state, {
        isAhse: true,
      });
    case 'IS_ENGR_REQ':
      return Object.assign({}, state, {
        isEngr: true,
      });
    case 'RESET_REQ':
      return Object.assign({}, state, {
        isGenReq: false,
        isMajorReq: false,
        isMathsci: false,
        isAhse: false,
        isEngr: false,
      });
    default:
      return state;
  }
};

export default ReqsReducer;
