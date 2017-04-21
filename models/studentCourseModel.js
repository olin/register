const mongoose = require('mongoose');

const studentCourseSchema = mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  semester: String,
  grade: {
  	type: String,
  	default: 'N/A',	// if the course is planned/being taken, but not completed
  },
});

module.exports = mongoose.model('StudentCourse', studentCourseSchema);
