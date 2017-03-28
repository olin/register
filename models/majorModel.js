var mongoose = require('mongoose');

// Create sample Schema
var majorSchema = mongoose.Schema({
  name: String,
  requirements: []
});

module.exports = mongoose.model("Major", majorSchema);
