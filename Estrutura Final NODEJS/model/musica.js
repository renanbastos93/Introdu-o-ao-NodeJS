var mongoose = require('mongoose');
 
var musicaSchema = mongoose.Schema({
	nome: String, 
	genero: String, 
	artista: String
});

module.exports = mongoose.model('Musica', musicaSchema, 'Musica');