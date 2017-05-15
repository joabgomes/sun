var express = require('express');
var ComprasAPI = require('./compras.api');
var router = express.Router();

router.route('/v1/compras')
  .get(ComprasAPI.lista)
  .post(ComprasAPI.adiciona);

router.route('/v1/compras/:id')
  .get(ComprasAPI.buscaPorId)
  .delete(ComprasAPI.exclui)
  .put(ComprasAPI.atualiza);

module.exports = router;