const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  registrarId: String, // e.g. AHSE1000
  title: String, // e.g. Olin Introductory Experience
  credits: Number,
  // The following are arrays of requirements fulfilled by the course.
  generalRequirements: [String],
  otherRequirements: [String],
});


module.exports = mongoose.model('Course', courseSchema);
