const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const signatureSchema = new Schema({
    signatureOfGuest: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
    messageOfGuest: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

const Signature = mongoose.model('Signature', signatureSchema);

module.exports = Signature;