var express = require('express');
var UsuariosAPI = require('./usuarios.api');
var router = express.Router();

router.route('/v1/usuarios')
    .get(UsuariosAPI.lista)
    .post(UsuariosAPI.adiciona);

router.route('/v1/usuarios/:id')
    .get(UsuariosAPI.buscarPorId)
    .delete(UsuariosAPI.exclui)
    .put(UsuariosAPI.atualiza);

module.exports = router;
    