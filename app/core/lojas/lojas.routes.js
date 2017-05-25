var express = require('express');
const LojasAPI = require('./lojas.api');
var router = express.Router();

router.route('/v1/lojas')
  .get(LojasAPI.lista)
  .post(LojasAPI.adiciona);

router.route('/v1/lojas/:id')
  .get(LojasAPI.buscaPorId)
  .delete(LojasAPI.exclui)
  .put(LojasAPI.atualiza);  

module.exports = router;