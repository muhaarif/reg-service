var User = require('../models/User');

function UserDAO() { }

UserDAO.prototype.getUsers = function (callback) {
    User.find({}, (err, data) => {
        console.log("UserDAO=" + JSON.stringify(data));
        console.log("err=" + JSON.stringify(err));
        callback(err, data);
    });
}

UserDAO.prototype.addUser = function (data, callback) {
    var user = new User(data);
    user.save(function (err, data) {
        callback(err, data);
    });
}

UserDAO.prototype.getUserById = function (id,data,callback) {
    User.findOne({"id":parseInt(id)},data,callback);
}

UserDAO.prototype.updateUserById = function (id, data, callback) {
    User.findOneAndUpdate({ "id": parseInt(id) }, data, callback);
}

UserDAO.prototype.deleteUserById = function (id, callback) {
    User.findOneAndRemove({ "id": parseInt(id) }, callback);
}

module.exports = UserDAO;
