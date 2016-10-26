var mongoose = require('mongoose');
var config   = require('./config');
var db = mongoose.connection;

mongoose.connect(config.mongodb.dbURI);

db.on('error', console.error);

db.once('open', function() {
	console.log("Connect MongoDB!");
});

module.exports = mongoose;
