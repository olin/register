const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  registrarId: String,
  title: String,
  credits: Number,
  requirements: [String],
});

module.exports = mongoose.model('Course', courseSchema);
