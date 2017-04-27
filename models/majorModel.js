const mongoose = require('mongoose');


const majorSchema = mongoose.Schema({
  name: {
    type: String,
    // This default is set mainly to show off what the major is
    // intended to look like
    default: 'Mechanical Engineering',
  },
  generalRequirements: {
    type: [String],
    // Because these are the same for every student, it makes sense to
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
    // This default is also set to communicate what a
    // list of major requirements should contain.
    // This should also be adaptable to a custom POS pretty easily
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
