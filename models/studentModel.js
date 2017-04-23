const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const studentSchema = mongoose.Schema({
  email: String,
  name: String,
  olinId: String,
  entryYear: Number,
  major: String,
  completedCourses: [{
    courseId: mongoose.Schema.Types.ObjectId,
    grade: String,
    semester: String,
  }],
  plannedCourses: [{
    courseId: mongoose.Schema.Types.ObjectId,
    semester: String, //note that a planned course does not always need a semester
  }],

});

studentSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Student', studentSchema);
