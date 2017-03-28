var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create student Schema
var studentSchema = mongoose.Schema({
  email: String,
  name: String,
  olinId: String,
  entryYear: Number,
  major: String,
  completedCourses: [Schema.Types.ObjectId],
  plannedCourses: [Schema.Types.ObjectId]
});

module.exports = mongoose.model("Student", studentSchema);
