var express = require('express');
var ClienteSunAPI = require('./clientesun.api');
var router = express.Router();

router.route('/v1/clientesun')
    .get(ClienteSunAPI.lista)
    .post(ClienteSunAPI.adiciona);

router.route('/v1/clientesun/:id')
    .get(ClienteSunAPI.buscarPorId)
    .delete(ClienteSunAPI.exclui)
    .put(ClienteSunAPI.atualiza);

module.exports = router;
