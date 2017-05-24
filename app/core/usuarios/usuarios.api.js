const usuariosService = require('./usuarios.service');

const api = {
    lista: listarUsuariosAPI,
    adiciona: adicionarUsuarioAPI,
    buscaPorId: buscarUsuarioPorIdAPI,
    exclui: excluirUsuarioAPI,
    atualiza: atualizaUsuarioAPI
};

module.exports = api;

/**
 * GET/ usuarios
 */
function listarUsuariosAPI(req, res){
    usuariosService.listarUsuarios()
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
    usuariosService.buscarUsuarioPorId(req.params.id)
    .then(function(usuario){
        if(!usuario) throw Error('Usuario não encontrado !');
     return res.json(usuario);
    }, function(error){
     return res.status(404).json(error);
    });
};

/**
 * POST/ usuario
 */
function adicionarUsuarioAPI(req, res){
     usuariosService.adicionarUsuario(req.body)
    .then(function(novoUsuario){
     return res.json(novoUsuario);
    }, function(error){
     return res.status(500).json(error);
    });
};

/**
 * DELETE/ usuario/:id
 */
function excluirUsuarioAPI(req, res){
    usuariosService.excluirUsuario(req.params.id)
    .then(function(){
     return res.status(204).end();
    }, function(error){
     return res.status(500).json(error);
    });
};

/**
 * PUT/ usuario/:id
 */
function atualizaUsuarioAPI(req, res){
    usuariosService.atualizarUsuario(req.params.id, req.body)
    .then(function(usuario){
     return res.json(usuario);
    }, function(error){
     return res.status(500).json(error);
    });
};