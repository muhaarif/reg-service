var Counter = require('../models/Counter');

function CounterDAO() { }

CounterDAO.prototype.incrementCounter = function (counterType, callback) {
    Counter.findOneAndUpdate({ "type": counterType },
        { $inc: { "counter": 1 } }, { "new": true, "upsert": true }, callback);
}

module.exports = CounterDAO;
