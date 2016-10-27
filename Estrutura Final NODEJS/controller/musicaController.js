var musicaService = require("../service/musicaService.js");

var operations = {};

operations.save = function(req, res){
	musicaService.save(req.body, function(data){
		if(data){
			var resposta = "Operation success! > "+data;
			res.send(resposta);
		}else{
			res.send("Operation Invalid!");
		}
	});
};
operations.list = function(req, res){
	musicaService.list(function(data){
		if(data){
			res.send(data);
		}else{
			res.send("No data found!");
		}
	});
};

module.exports = operations;

/* TO DO - IMPLEMENTAR ROTA AQUI */