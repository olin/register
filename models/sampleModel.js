var mongoose = require('mongoose');

// Create user Schema
var sampleSchema = mongoose.Schema({
  sample: String,
});

module.exports = mongoose.model("Sample", sampleSchema);
