const mongoose = require('mongoose');

const testingEntryCounterSchema = new mongoose.Schema({
  versionId: { type: String },
  counter: { type: Number },
});

module.exports = mongoose.model('testingEntryCounter', testingEntryCounterSchema);



