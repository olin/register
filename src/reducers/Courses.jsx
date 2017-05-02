const Courses = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.courses;
    default:
      return state;
  }
};

export default Courses;
