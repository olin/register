const initialState = {
  requirements: [
    {
      id: 'uocd_req',
      category: 'UOCD',
      courses: [
        {
          name: 'User Oriented Collaborative Design',
          courseId: 'uocdcourseid',
        },
      ],
      selected: '',
    },
    {
      id: 'mech_math',
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
      selected: 'MTH3150',
    },
  ],
};


const CoursePlannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COURSE':
      return Object.assign({}, state, {
        requirements: state.requirements.map((requirement) => {
          if (requirement.courseId === action.courseId) {
            return Object.assign({}, requirement, {
              selected: requirement.courseId,
            });
          }
          return requirement;
        }),
      });
    default:
      return state;
  }
};

export default CoursePlannerReducer;
