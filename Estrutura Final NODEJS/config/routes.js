var router 			 = require('express').Router();
var musicaController = require("../controller/musicaController.js");

router.get('/',function(req, res){
    res.send("Hello World");
});

/* Route Music */
router.get('/musicas', musicaController.list);
router.post('/musica', musicaController.save);
//router.put('/music', musicaController.alter);
//router.delete('/music', musicaController.delete);

module.exports = router;  