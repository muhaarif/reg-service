const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var MODEL_CONSTANTS = require('./../constants/ModelConstants');

const UserSchema = new Schema({
  id: { type: Number, required: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String},
  phoneNumber: { type: Number },
  dob: { type: Date, required: false },
  insertedBy : { type: String, default: MODEL_CONSTANTS.DEFAULT_USER  },
  insertedDate : { type : Date, default: Date.now },
  modifiedBy : { type: String, default: MODEL_CONSTANTS.DEFAULT_USER },
  modifiedDate : { type : Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema, 'User');
