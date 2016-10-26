var Musica = require("../model/musica");
var operations = {};

operations.save = function(objeto, callback){
	console.log("chegou aqui")
	var Music = new Musica(objeto);
	Music.save(function(err, data){
		if(data) {
			console.log("cadastrado com sucesso!");
		}
		callback(data);
	});
};
operations.list = function(callback){
	Musica.find({}, function(err, data){
		if(err) console.error;
		if(data) {
			console.log("Operation is Success!");
			callback(data);
		}	
	});
};

module.exports = operations;