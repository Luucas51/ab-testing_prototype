const mongoose = require('mongoose');

const testingSchema = new mongoose.Schema({
  versionId: { type: String },
  success: { type: Boolean },

});

module.exports = mongoose.model('testing', testingSchema);



