const initialState = {
  categories: [
    {
      catId: 'uocd_req',
      category: 'UOCD',
      courses: [
        {
          courseCode: 'ENGR2250',
          title: 'User Oriented Collaborative Design',
        },
      ],
      selected: ' ',
    },
    {
      catId: 'mech_math',
      category: 'ME Math',
      courses: [
        {
          courseCode: 'MTH3120',
          title: 'Partial Differential Equations',
        },
        {
          courseCode: 'MTH3150',
          title: 'Numerical Methods and Scientific Computing',
        },
        {
          courseCode: 'MTH3170',
          title: 'Nonlinear Dynamics and Chaos',
        },
      ],
      selected: ' ',
    },
  ],
  allCourses: [
    {
      _id: '58f7fd7f734d1d33b3280a03',
      courseCode: 'ENGR1200',
      title: 'Design Nature',
    },
    {
      _id: '58f7fe13734d1d33b3280a39',
      courseCode: 'ENGR2100',
      title: 'POE',
    },
    {
      _id: '58fcef1e734d1d3bdb427037',
      courseCode: 'MTH2210',
      title: 'Linearity I',
    },
    {
      _id: '58fcef48734d1d3bdb427041',
      courseCode: 'MTH2220',
      title: 'Linearity II',
    },
    {
      _id: '58fcef70734d1d3bdb427049',
      courseCode: 'MTH2110',
      title: 'Discrete Math',
    },
    {
      _id: '58fcef9d734d1d3bdb42705f',
      courseCode: 'MTH2130',
      title: 'Probability and Statistics',
    },
    {
      _id: '58fcf49a734d1d3bdb4271da',
      courseCode: 'MTH1111',
      title: 'Modeling and Simulation of the Physical World',
    },
    {
      _id: '58fcf4bf734d1d3bdb4271de',
      courseCode: 'SCI1111',
      title: 'Modeling and Simulation of the Physical World',
    },
    {
      _id: '58fcf500734d1d3bdb4271ec',
      courseCode: 'ENGR1125',
      title: 'Introduction to Sensors, Instrumentation and Measurement',
    },
    {
      _id: '58fcf52b734d1d3bdb4271ef',
      courseCode: 'AHSE1100',
      title: 'History of Technology',
    },
    {
      _id: '58fcf55d734d1d3bdb427213',
      courseCode: 'AHSE1135',
      title: 'The Digital Eye: Photography, Vision, and Visual Communication',
    },
    {
      _id: '58fcf587734d1d3bdb427224',
      courseCode: 'AHSE1515',
      title: 'Products and Markets',
    },
    {
      _id: '59078ab4734d1d17cad13492',
      courseCode: 'ENGR2340',
      title: 'Dynamics',
    },
    {
      _id: '59078ae6734d1d17cad134a2',
      courseCode: 'ENGR2330',
      title: 'Introduction to Mechanical Prototyping',
    },
    {
      _id: '59078b0a734d1d17cad134a4',
      courseCode: 'ENGR2350',
      title: 'Thermodynamics',
    },
    {
      _id: '59078b54734d1d17cad134b9',
      courseCode: 'ENGR2410',
      title: 'Signals and Systems',
    },
    {
      _id: '59078b8a734d1d17cad134d7',
      courseCode: 'ENGR2420',
      title: 'Introduction to Microelectronic Circuits with laboratory',
    },
    {
      _id: '59078bba734d1d17cad134f4',
      courseCode: 'ENGR2510',
      title: 'Software Design',
    },
    {
      _id: '59078c19734d1d17cad1357b',
      courseCode: 'ENGR3220',
      title: 'Human Factors and Interface Design',
    },
    {
      _id: '59078c37734d1d17cad1359e',
      courseCode: 'ENGR3230',
      title: 'Investigating Normal',
    },
    {
      _id: '59078c6c734d1d17cad135b6',
      courseCode: 'ENGR3310',
      title: 'Transport Phenomena',
    },
    {
      _id: '59078c85734d1d17cad135b7',
      courseCode: 'ENGR3330',
      title: 'Mechanical Design',
    },
    {
      _id: '59078d14734d1d17cad1360f',
      courseCode: 'ENGR2320',
      title: 'Mechanics of Solids and Structures',
    },
    {
      _id: '59078d53734d1d17cad13616',
      courseCode: 'MTH3120',
      title: 'Partial Differential Equations',
    },
    {
      _id: '59078dd1734d1d17cad13651',
      courseCode: 'MTH3150',
      title: 'Numerical Methods and Scientific Computing',
    },
    {
      _id: '59078dfd734d1d17cad13660',
      courseCode: 'MTH3170',
      title: 'Nonlinear Dynamics and Chaos',
    },
    {
      _id: '59078e3e734d1d17cad136a6',
      courseCode: 'AHSE2112',
      title: 'Six Books that Changed the World',
    },
    {
      _id: '59078e5b734d1d17cad136af',
      courseCode: 'AHSE2114',
      title: 'Science Fiction and Historical Context',
    },
    {
      _id: '59078ea1734d1d17cad136c4',
      courseCode: 'AHSE2170',
      title: 'Teaching and Learning in Undergraduate Science and Engineering',
    },
    {
      _id: '59078ed9734d1d17cad136f8',
      courseCode: 'SCI1130',
      title: 'Mechanics',
    },
    {
      _id: '59078ee8734d1d17cad136fa',
      courseCode: 'SCI1121',
      title: 'Electricity and Magnetism',
    },
    {
      _id: '59078f18734d1d17cad13712',
      courseCode: 'SCI1210',
      title: 'Principles of Modern Biology (with laboratory)',
    },
    {
      _id: '59078f8a734d1d17cad13758',
      courseCode: 'SCI1130',
      title: 'Introduction to Chemistry (with laboratory)',
    },
    {
      _id: '59078fb4734d1d17cad1375c',
      courseCode: 'SCI1140',
      title: 'Materials Science and Solid State Chemistry (with laboratory)',
    },
    {
      _id: '59078fff734d1d17cad13769',
      courseCode: 'AHSE1140',
      title: 'Culture & Difference: An Anthropological Approach',
    },
    {
      _id: '5907918b734d1d17cad13872',
      courseCode: 'AHSE2131',
      title: 'Responsive Drawing and Visual Thinking',
    },
    {
      _id: '59079217734d1d17cad1389f',
      courseCode: 'ENGR3110',
      title: 'Elecanisms',
    },
    {
      _id: '59079235734d1d17cad138a0',
      courseCode: 'ENGR3370',
      title: 'Controls',
    },
    {
      _id: '59079272734d1d17cad138a7',
      courseCode: 'ENGR3390',
      title: 'Fundamentals of Robotics',
    },
    {
      _id: '590792bd734d1d17cad138be',
      courseCode: 'ENGR3710',
      title: 'Systems',
    },
    {
      _id: '590792eb734d1d17cad138bf',
      courseCode: 'ENGR3610',
      title: 'Biomedical Materials',
    },
    {
      _id: '5907932e734d1d17cad138c4',
      courseCode: 'ENGR3260',
      title: 'Design for Manufacturing',
    },
    {
      _id: '59079f09734d1d17cad13e75',
      courseCode: 'OIE1000',
      title: 'Olin Introductory Experience',
    },
  ],
  otherCourses: [
    {
      _id: '59079f09734d1d17cad13e75',
      courseCode: 'OIE1000',
      title: 'Olin Introductory Experience',
    },
  ],
  value: '',
  suggestions: [],
};


const CoursePlannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COURSE':
      return Object.assign({}, state, {
        categories: state.categories.map((category) => {
          if (category.catId === action.catId) {
            return Object.assign({}, category, {
              selected: action.courseCode,
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
          course.courseCode !== action.courseCode,
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

export default CoursePlannerReducer;
