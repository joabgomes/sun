var express = require('express');
var produtosAPI = require('./produtos.api');
var router = express.Router();

router.route('/v1/produtos')
  .get(produtosAPI.lista)
  .post(produtosAPI.adiciona);

router.route('/v1/produtos/:id')
  .get(produtosAPI.buscaPorId)
  .put(produtosAPI.atualiza)
  .delete(produtosAPI.excluir);

module.exports = router;