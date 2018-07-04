var async = require('async');

var CounterService = require('./CounterService');
var counterService = new CounterService();

var UserDAO = require("./../dao/UserDAO");
var userDAO = new UserDAO();

function UserService() { }

//Get all Users
UserService.prototype.getUsers= function (callback){
    userDAO.getUsers(callback);
}
//Get users by UserId
UserService.prototype.getUserById= function (id,callback){
    userDAO.getUserById(id,callback);
}

UserService.prototype.getUserByEmail= function (email,callback){
    userDAO.getUserByEmail(email,callback);
}

//Add a User
UserService.prototype.addUser = function (data, callback) {
  async.waterfall([
    function (cb) {
      counterService.getNextUserId(cb);
    }, function (counterDoc, cb) {
        data.id = counterDoc.counter;
          userDAO.addUser(data, callback);
      }
  ], callback);
}
//Update User
UserService.prototype.updateUserById= function (id, data, callback) {
    userDAO.updateUserById(id, data, callback);
}
//Delete User
UserService.prototype.deleteUserById= function (id, callback) {
    userDAO.deleteUserById(id, callback);
}

UserService.prototype.checkIfUserExists= function (data, callback) {
    userDAO.findIfUserExists(data, callback);
}
module.exports = UserService;
