const mongoose = require('mongoose');

// Create major Schema
const majorSchema = mongoose.Schema({
  sample: String,
});

module.exports = mongoose.model('Major', majorSchema);
