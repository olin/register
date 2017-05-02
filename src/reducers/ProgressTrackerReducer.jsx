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
      const mathSciPercNum = Math.round((mathTotal + sciTotal) * 3.33);
      const mathSciPerc = mathSciPercNum.toString().concat('%');
      const engrPercNum = Math.round(engrTotal * 2.17);
      const engrPerc = engrPercNum.toString().concat('%');
      const ahsePercNum = Math.round(ahseTotal * 3.4);
      const ahsePerc = ahsePercNum.toString().concat('%');

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
      });
    }
    default: {
      return state;
    }
  }
};

export default ProgressTrackerReducer;
