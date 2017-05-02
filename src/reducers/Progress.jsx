import { combineReducers } from 'redux';

// Array reducing funcions
const sumCredits = (acc, element) => acc + element.credits;

const flatten = (acc, arr) => acc.concat(arr);

// Arrays of completed requirements
const completedGeneralRequirements = (state = [], action) => {
  switch (action.type) {
    case 'GET_COMPLETED_COURSES': {
      const courses = action.completedCourses
        .map(course => course.generalRequirements)
        .reduce(flatten, [])
        .filter(req => req !== undefined);
      const percentNumber = Math.round(courses.length * 6.25);
      const percentString = percentNumber.toString().concat('%');
      return Object.assign({}, state, {
        courses,
        percentString,
      });
    }
    default:
      return state;
  }
};

const completedMajorRequirements = (state = [], action) => {
  switch (action.type) {
    case 'GET_COMPLETED_COURSES': {
      const courses = action.completedCourses
        .map(course => course.majorRequirements)
        .reduce(flatten, [])
        .filter(req => req !== undefined);
      const percentNumber = Math.round(courses.length * 6.25);
      const percentString = percentNumber.toString().concat('%');
      return Object.assign({}, state, {
        courses,
        percentString,
      });
    }
    default:
      return state;
  }
};

// Objects of completed courses by subject type
const progressInitialState = {
  courses: [],
  creditTotal: 0,
};

const mathSciCourses = (state = progressInitialState, action) => {
  switch (action.type) {
    case 'GET_COMPLETED_COURSES': {
      const mathCourses = action.completedCourses
        .filter(course => course.registrarId.substring(0, 3) === 'MTH');
      const sciCourses = action.completedCourses
        .filter(course => course.registrarId.substring(0, 3) === 'SCI');
      const mathTotal = mathCourses.reduce(sumCredits, 0);
      const sciTotal = sciCourses.reduce(sumCredits, 0);
      const creditTotal = mathTotal + sciTotal;
      const percentNumber = Math.round(creditTotal * 2.17);
      const percentString = percentNumber.toString().concat('%');
      return Object.assign({}, state, {
        mathCourses,
        sciCourses,
        creditTotal,
        mathTotal,
        sciTotal,
        percentString,
      });
    }
    default:
      return state;
  }
};


const engrCourses = (state = progressInitialState, action) => {
  switch (action.type) {
    case 'GET_COMPLETED_COURSES': {
      const courses = action.completedCourses
        .filter(course => course.registrarId.substring(0, 3) === 'ENG');
      const creditTotal = courses.reduce(sumCredits, 0);
      const percentNumber = Math.round(creditTotal * 2.17);
      const percentString = percentNumber.toString().concat('%');
      return Object.assign({}, state, {
        courses,
        creditTotal,
        percentString,
      });
    }
    default:
      return state;
  }
};

const ahseCourses = (state = progressInitialState, action) => {
  switch (action.type) {
    case 'GET_COMPLETED_COURSES': {
      const courses = action.completedCourses
        .filter(course => course.registrarId.substring(0, 3) === 'AHS');
      const creditTotal = courses.reduce(sumCredits, 0);
      const percentNumber = Math.round(creditTotal * 3.57);
      const percentString = percentNumber.toString().concat('%');
      return Object.assign({}, state, {
        courses,
        creditTotal,
        percentString,
      });
    }
    default:
      return state;
  }
};

// Filters for ProgressTracker display
const isGenReq = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_GEN_REQ':
      return true;
    case 'RESET_REQ':
      return false;
    default:
      return state;
  }
};

const isMajorReq = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_MAJOR_REQ':
      return true;
    case 'RESET_REQ':
      return false;
    default:
      return state;
  }
};

const isMathSci = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_MATHSCI':
      return true;
    case 'RESET_REQ':
      return false;
    default:
      return state;
  }
};

const isAhse = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_AHSE':
      return true;
    case 'RESET_REQ':
      return false;
    default:
      return state;
  }
};

const isEngr = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_ENGR':
      return true;
    case 'RESET_REQ':
      return false;
    default:
      return state;
  }
};

const progressFilter = combineReducers({
  isGenReq,
  isMajorReq,
  isMathSci,
  isAhse,
  isEngr,
});

const Progress = combineReducers({
  completedGeneralRequirements,
  completedMajorRequirements,
  mathSciCourses,
  engrCourses,
  ahseCourses,
  progressFilter,
});

export default Progress;
