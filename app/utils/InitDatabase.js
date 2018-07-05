'use strict';

var Mongoose = require('mongoose');
var config = require('config');
var ConnectionUtils =require('./ConnectionUtils.js');
var mongoConfig = config.get('mongo');
const URI = ConnectionUtils.createMongoUri(mongoConfig)
Mongoose.connect(URI);
console.log(" Mongo Connection Uri {}  , ", URI);
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error'));
db.once('open', function callback() {
  console.log("Successfully Connected to MongoDB...");
});

exports.Mongoose = Mongoose;
exports.db = db;
