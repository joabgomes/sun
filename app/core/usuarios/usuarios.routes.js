var express = require('express');
var usuariosAPI = require('./usuarios.api');
var router = express.Router();

router.route('/v1/usuarios')
  .get(usuariosAPI.lista)
  .post(usuariosAPI.adiciona);

router.route('/v1/usuarios/:id')
  .get(usuariosAPI.buscaPorId)
  .delete(usuariosAPI.exclui)
  .put(usuariosAPI.atualiza);

module.exports = router;
    