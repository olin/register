const initialState = {
  categories: [
    {
      catId: 'uocd_req',
      category: 'UOCD',
      courses: [
        {
          name: 'User Oriented Collaborative Design',
          courseId: 'ENGR2250',
        },
      ],
      selected: ' ',
    },
    {
      catId: 'mech_math',
      category: 'ME Math',
      courses: [
        {
          name: 'Partial Differential Equations',
          courseId: 'MTH3120',
        },
        {
          name: 'Numerical Methods and Scientific Computing',
          courseId: 'MTH3150',
        },
        {
          name: 'Nonlinear Dynamics and Chaos',
          courseId: 'MTH3170',
        },
      ],
      selected: ' ',
    },
  ],
};


const CoursePlannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COURSE':
      return Object.assign({}, state, {
        categories: state.categories.map((category) => {
          if (category.catId === action.catId) {
            return Object.assign({}, category, {
              selected: action.courseId,
            });
          }
          return category;
        }),
      });
    default:
      return state;
  }
};

export default CoursePlannerReducer;
