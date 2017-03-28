var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create student-course instance Schema
var studentCourseSchema = mongoose.Schema({
  studentId: Schema.Types.ObjectId,
  courseId: Schema.Types.ObjectId,
  semester: String,
  grade: String
});

module.exports = mongoose.model("StudentCourse", studentCourseSchema);