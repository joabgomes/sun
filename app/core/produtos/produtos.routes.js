const express = require('express');
const produtosAPI = require('./produtos.api');
const router = express.Router();

router.route('/v1/produtos')
  .get(produtosAPI.lista)
  .post(produtosAPI.adiciona);

router.route('/v1/produtos/:id')
  .get(produtosAPI.buscaPorId)
  .put(produtosAPI.atualiza)
  .delete(produtosAPI.exclui);

module.exports = router;