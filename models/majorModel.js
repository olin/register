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
      'Modeling and Simulation of the Physical World',
      'Linearity I',
      'Linearity II',
      'Probability and Statistics',
      'Biology Foundation',
      'Chemistry/Materials Science',
      'Physics Foundation',
      'Introduction to Sensors, Instrumentation, and Measurement',
      'Principles of Engineering',
      'Engineering Capstone',
      'Design Nature',
      'User-Oriented Collaborative Design',
      'Design Depth',
      'AHS Foundation',
      'AHS or Entrepreneurship Depth of Study',
      'Olin Self Study',
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
