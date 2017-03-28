var mongoose = require('mongoose');

// Create course Schema
var courseSchema = mongoose.Schema({
  registrarId: String,
  title: String,
  credits: Number,
  ENGRCredits: Number,
  AHSCredits: Number,
  MTHCredits: Number,
  SCICredits: Number,
  ECredits: Number,
  NDGRCredits: Number,
  requirements: [String]
});

module.exports = mongoose.model("Course", courseSchema);
