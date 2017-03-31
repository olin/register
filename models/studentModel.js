const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  email: String,
  name: String,
  olinId: String,
  entryYear: Number,
  major: String,
  completedCourses: [mongoose.Schema.Types.ObjectId],
  plannedCourses: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('Student', studentSchema);
