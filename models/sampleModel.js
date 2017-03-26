var mongoose = require('mongoose');

// Create sample Schema
var sampleSchema = mongoose.Schema({
  sample: String,
});

module.exports = mongoose.model("Sample", sampleSchema);
