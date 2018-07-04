//Imports
const ROUTES = require('../constants/RouteConstants');
let User = require('./User');
//Register the module specific endpoints here.
module.exports.endpoints = [
  //This below methods for user
  { method: 'GET', path: ROUTES.USERS, config: User.getUsers },
  { method: 'POST', path: ROUTES.USER, config: User.saveUser },
  { method: 'GET', path: ROUTES.USER_BY_ID, config: User.getUserById },
  { method: 'PUT', path: ROUTES.USER_BY_ID, config: User.updateUserById },
  { method: 'DELETE', path: ROUTES.USER_BY_ID, config: User.deleteUserById }
];
