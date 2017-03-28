var mongoose = require('mongoose');

// Create major Schema
var majorSchema = mongoose.Schema({
  sample: String,
});

module.exports = major.model("Major", majorSchema);
