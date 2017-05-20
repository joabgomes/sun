const UsuariosService = require('./usuarios.service');

const api = {
    lista: listarUsuariosAPI,
    adiciona: adicionarUsuarioAPI,
    buscarPorId: buscarUsuarioPorIdAPI,
    exclui: excluirUsuarioAPI,
    atualiza: atualizaUsuarioAPI
};

module.exports = api;
/**
 * GET/ usuarios
 */
function listarUsuariosAPI(req, res){
    UsuariosService.listarUsuarios()
    .then(function(usuarios) {
        return res.json(usuarios);
    }, function(error){
        return res.status(500).json(error);
    });
}
/**
 * GET/ usuarios/:id
 */
function buscarUsuarioPorIdAPI(req, res){
    return res.status(501).end();
}
/**
 * POST/ usuario
 */
function adicionarUsuarioAPI(req, res){
     UsuariosService.adicionarUsuario(req.body)
    .then(function(novoUsuario){
        return res.json(novoUsuario);
    }, function(error){
        return res.status(500).json(error);
        });
    }

/**
 * DELETE/ usuario/:id
 */
function excluirUsuarioAPI(req, res){
    UsuariosService.excluirUsuario(req.params.id)
    .then (function(){
        return res.status(204).end();
    }, function(error){
        console.log(error);
        return res.status(500).json(error);
    });
}
/**
 * PUT/ usuario/:id
 */
function atualizaUsuarioAPI(req, res){
    return res.status(501).end();
}