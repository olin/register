const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const studentSchema = mongoose.Schema({
  email: String,
  name: String,
  olinId: String,
  entryYear: Number,
  major: String,
  completedCourses: [mongoose.Schema.Types.ObjectId],
  plannedCourses: [mongoose.Schema.Types.ObjectId],
});


studentSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Student', studentSchema);
