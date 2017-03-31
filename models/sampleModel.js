const mongoose = require('mongoose');

// Create sample Schema
const sampleSchema = mongoose.Schema({
  sample: String,
});

module.exports = mongoose.model('Sample', sampleSchema);
