const initialState = {
  categories: [
    {
      catId: 'ModSim',
      category: 'ModSim',
      courses: [
        {
          registrarId: 'MTH1111',
          title: 'Modeling and Simulation of the Physical World',
        },
      ],
      selected: 'MTH1111',
    },
    {
      catId: 'UOCD',
      category: 'UOCD',
      courses: [
        {
          registrarId: 'ENGR2250',
          title: 'User Oriented Collaborative Design',
        },
      ],
      selected: ' ',
    },
    {
      catId: 'ProbStat',
      category: 'Probability and Statistics',
      courses: [
        {
          registrarId: 'MTH2130',
          title: 'Probability and Statistics',
        },
        {
          registrarId: 'MTH2131',
          title: 'Data Science',
        },
        {
          registrarId: 'MTH2132',
          title: 'Bayesian Inference and Reasoning',
        },
        {
          registrarId: 'MTH2133',
          title: 'Computational Bayesian Statistics',
        },
        {
          registrarId: 'MTH2134',
          title: 'Regional Analysis in Development',
        },
      ],
      selected: ' ',
    },
    {
      catId: 'me_math',
      category: 'ME Math',
      courses: [
        {
          registrarId: 'MTH3120',
          title: 'Partial Differential Equations',
        },
        {
          registrarId: 'MTH3150',
          title: 'Numerical Methods and Scientific Computing',
        },
        {
          registrarId: 'MTH3170',
          title: 'Nonlinear Dynamics and Chaos',
        },
      ],
      selected: ' ',
    },
  ],
  otherCourses: [
    {
      _id: '59079f09734d1d17cad13e75',
      registrarId: 'OIE1000',
      title: 'Olin Introductory Experience',
    },
  ],
  value: '',
  suggestions: [],
};


const CoursePlanner = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COURSE':
      return Object.assign({}, state, {
        categories: state.categories.map((category) => {
          if (category.catId === action.catId) {
            return Object.assign({}, category, {
              selected: action.registrarId,
            });
          }
          return category;
        }),
      });
    case 'ADD_COURSE':
      return Object.assign({}, state, {
        otherCourses: state.otherCourses.concat(action.course),
      });
    case 'REMOVE_COURSE':
      return Object.assign({}, state, {
        otherCourses: state.otherCourses.filter(course =>
          course.registrarId !== action.registrarId,
        ),
      });
    case 'UPDATE_SEARCH_FIELD':
      return Object.assign({}, state, {
        value: action.newValue,
      });
    case 'UPDATE_SUGGESTIONS':
      return Object.assign({}, state, {
        suggestions: action.suggestions,
      });
    default:
      return state;
  }
};

export default CoursePlanner;
