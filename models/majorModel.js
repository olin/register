const mongoose = require('mongoose');


const majorSchema = mongoose.Schema({
  name: {
    type: String,
    // this default is mainly to show what a major looks like
    default: 'Mechanical Engineering',
  },
  generalRequirements: {
    type: [String],
    // because these are the same for every student, it makes sense to
    // include default general requirements regardless of major
    default: [
      'ModSim Math',
      'ModSim Science',
      'Linearity I',
      'Linearity II',
      'ProbStat',
      'Biology Foundation',
      'Chem/Matsci Foundation',
      'Physics Foundation',
      'iSIM',
      'POE',
      'Engineering Capstone',
      'DesNat',
      'UOCD',
      'Design Depth',
      'AHS Foundation',
      'E! Foundation',
      'OSS',
    ],
  },
  majorRequirements: {
    type: [String],
    // this should be adaptable to a custom plan of study pretty easily
    default: [
      'Mechanical Engineering Math',
      'Mechanics of Solids and Structures',
      'Dynamics',
      'Thermodynamics',
      'Transport Phenomena',
      'Mechanical Design',
      'Mechanical Engineering Elective',
    ],
  },
});

module.exports = mongoose.model('Major', majorSchema);
