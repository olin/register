const initialState = {
  username: '',
  password: '',
  id: '',
  entryYear: 0,
  major: '',
  plannedCourses: [],
  completedCourses: [],
  allCourses: [],
  loggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return Object.assign({}, state, {
        username: action.username,
      });
    case 'UPDATE_PASSWORD':
      return Object.assign({}, state, {
        password: action.password,
      });
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        username: action.username,
        id: action.id,
        entryYear: action.entryYear,
        major: action.major,
        plannedCourses: action.plannedCourses,
        completedCourses: action.completedCourses,
        allCourses: action.courses,
        loggedIn: true,
      });
    case 'CHANGE_SEMESTER': {
      const isCourseMatch = course => course.courseId === action.courseId;
      const index = state.plannedCourses.findIndex(isCourseMatch);
      const course = state.plannedCourses.find(isCourseMatch);
      course.semester = action.newSemester;
      const updatedPlanned = state.plannedCourses;
      updatedPlanned[index] = course;
      return Object.assign({}, state, {
        plannedCourses: updatedPlanned,
      });
    }
    default:
      return state;
  }
};

export default LoginReducer;
