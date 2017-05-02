const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const studentSchema = mongoose.Schema({
  username: String,
  name: String,
  olinId: String, // e.g. 12345678
  entryYear: Number,
  major: String,
  completedCourses: [{
    courseId: mongoose.Schema.Types.ObjectId,
    title: String,
    credits: Number,
    generalRequirements: [String],
    otherRequirements: [String],
    grade: String,
    semester: String,
  }],
  plannedCourses: [{
    courseId: mongoose.Schema.Types.ObjectId,
    title: String,
    credits: Number,
    requirements: [String],
    generalRequirements: [String],
    semester: String, // note that a planned course doesn't always need a semester
  }],
});

studentSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Student', studentSchema);
