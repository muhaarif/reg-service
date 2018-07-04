var mongoose = require('../utils/InitDatabase').Mongoose;

var counterSchema = mongoose.Schema({
    type: { type: String, required: true },
    counter: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Counter', counterSchema, 'Counter');
