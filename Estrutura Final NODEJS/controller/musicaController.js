var musicaService = require("../service/musicaService.js");

var operations = {};

operations.save = function(req, res){
	musicaService.save(req.body, function(data){
		if(data){
			res.send("Cadastrado com sucesso! > ");
		}else{
			res.send("não foi possivel");
		}
	});
};
operations.list = function(req, res){
	musicaService.list(function(data){
		if(data){
			res.send(data);
		}else{
			res.send("Dados não encontrados!");
		}
	});
};

module.exports = operations;

/* TO DO - IMPLEMENTAR ROTA AQUI */