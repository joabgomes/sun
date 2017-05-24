var express = require('express');
var EstoqueAPI = require('./estoque.api');
var router = express.Router();

router.route('/v1/estoque')
    .get(EstoqueAPI.lista)
    .post(EstoqueAPI.adiciona);

router.route('/v1/estoque/:id')
    .get(EstoqueAPI.buscaPorId)
    .delete(EstoqueAPI.exclui)
    .put(EstoqueAPI.atualiza);

module.exports = router;
