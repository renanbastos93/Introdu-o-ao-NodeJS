var musicaService = require("../service/musicaService.js");

var operations = {};

operations.save = function(req, res){
	musicaService.save(req.body, function(data){
		if(data){
			res.status(201).send("Cadastrado com sucesso! > ", data);
		}else{
			res.status(200).send("não foi possivel");
		}
	});
};
operations.list = function(req, res){
	musicaService.list(function(data){
		if(data){
			res.status(200).send(data);
		}else{
			res.status(200).send("Dados não encontrados!");
		}
	});
};

module.exports = operations;

/* TO DO - IMPLEMENTAR ROTA AQUI */