var router 			 = require('express').Router();
var musicaController = require("../controller/musicaController.js");

router.get('/',function(req, res){
    res.send("Hello World");
});

/* Route Music */
router.get('/musicas', musicaController.list);
router.post('/musicasInsert', musicaController.save);
//router.put('/musica', musicaController.alter);
//router.delete('/musica', musicaController.delete);

module.exports = router;  