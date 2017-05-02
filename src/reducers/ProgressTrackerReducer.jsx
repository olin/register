const initialState = {
  genreqs: 0,
  majorreqs: 0,
};

function sum(list) {
  let total = 0;
  for (let i = 0, len = list.length; i < len; i += 1) {
    total += list[i].credits;
  }
  return total;
}

const ProgressTrackerReducer = (state = initialState, action) => {
  const mathCourses = [];
  const engrCourses = [];
  const sciCourses = [];
  const ahseCourses = [];

  switch (action.type) {
    case 'GET_COMPLETED_COURSES': {
      const data = action.data;
      let genreqs = data.map(a => a.generalRequirements[0]);
      genreqs = genreqs.filter(n => n !== undefined);
      let majorreqs = data.map(a => a.otherRequirements[0]);
      majorreqs = majorreqs.filter(n => n !== undefined);

      for (let i = 0; i < data.length; i += 1) {
        switch (data[i].registrarId.substring(0, 3)) {
          case 'MTH':
            mathCourses.push({ title: data[i].title, credits: data[i].credits });
            break;
          case 'ENG':
            engrCourses.push({ title: data[i].title, credits: data[i].credits });
            break;
          case 'AHS':
            ahseCourses.push({ title: data[i].title, credits: data[i].credits });
            break;
          case 'SCI':
            sciCourses.push({ title: data[i].title, credits: data[i].credits });
            break;
          default:
            break;
        }
      }

      const mathTotal = sum(mathCourses);
      const engrTotal = sum(engrCourses);
      const ahseTotal = sum(ahseCourses);
      const sciTotal = sum(sciCourses);

      // converts progress into a string that can be used by
      // the progress bar in the ProgressTracker component
      const mathSciPercNum = Math.round((mathTotal + sciTotal) * 3.33);
      const mathSciPerc = mathSciPercNum.toString().concat('%');
      const engrPercNum = Math.round(engrTotal * 2.17);
      const engrPerc = engrPercNum.toString().concat('%');
      const ahsePercNum = Math.round(ahseTotal * 3.57);
      const ahsePerc = ahsePercNum.toString().concat('%');
      const genReqsPercNum = Math.round(genreqs.length * 6.25);
      const genReqsPerc = genReqsPercNum.toString().concat('%');
      const majorReqsPercNum = Math.round(majorreqs.length * 14.28);
      const majorReqsPerc = majorReqsPercNum.toString().concat('%');


      return Object.assign({}, state, {
        genreqs,
        majorreqs,
        mathCourses,
        engrCourses,
        sciCourses,
        ahseCourses,
        mathTotal,
        engrTotal,
        ahseTotal,
        sciTotal,
        mathSciPerc,
        engrPerc,
        ahsePerc,
        genReqsPerc,
        majorReqsPerc,
      });
    }
    default: {
      return state;
    }
  }
};

export default ProgressTrackerReducer;
