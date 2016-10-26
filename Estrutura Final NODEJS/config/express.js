var express 	= require('express'),
    config   	= require('./config'),
    bodyParser 	= require('body-parser'),
    app			= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST']);
	res.append('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/api', require('./routes'));

module.exports = app;