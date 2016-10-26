var config  = require('./config/config');
var app = require('./config/express');
var db = require('./config/mongoose');


app.listen(config.server.port, function () {
	console.log('App is running');
});