const mongoose = require('mongoose');

const studentCourseSchema = mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  semester: String,
  grade: String,
});

module.exports = mongoose.model('StudentCourse', studentCourseSchema);
