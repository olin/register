const initialState = {
  isGenReq: false,
  isMajorReq: false,
  isMathsci: false,
  isAhse: false,
  isEngr: false,
};

const ReqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_GEN_REQ':
      return Object.assign({}, state, {
        isGenReq: true,
      });
    case 'UPDATE_MAJOR_REQ':
      return Object.assign({}, state, {
        isMajorReq: true,
      });
    case 'UPDATE_MATHSCI_REQ':
      return Object.assign({}, state, {
        isMathsci: true,
      });
    case 'UPDATE_AHSE':
      return Object.assign({}, state, {
        isAhse: true,
      });
    case 'UPDATE_ENGR':
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
