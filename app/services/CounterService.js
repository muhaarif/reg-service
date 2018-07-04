var CounterDAO = require('./../dao/CounterDAO');
var counterDAO = new CounterDAO();


function CounterService() { }

CounterService.prototype.getNextUserId = function (callback) {
  counterDAO.incrementCounter("user", callback);
}
module.exports = CounterService;
