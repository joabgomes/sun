const ClienteSunService = require('./clientesun.service');

const api = {
    lista: listarClienteSunAPI,
    adiciona: adicionarClienteSunAPI,
    buscaPorId: buscarClienteSunPorIdAPI,
    exclui: excluirClienteSunAPI,
    atualiza: atualizaClienteSunAPI
};

module.exports = api;
/**
 * GET/ cliente sun
 */
function listarClienteSunAPI(req, res) {
    ClienteSunService.listarClienteSun()
        .then(function (clientesun) {
            return res.json(clientesun);
        }, function (error) {
            return res.status(500).json(error);
        });
}
/**
 * GET/ clientesun/:id
 */
function buscarClienteSunPorIdAPI(req, res) {
    ClienteSunService.buscarClienteSunPorId(req.params.id)
    .then(function(clientesun){
        if(!clientesun) throw Error('Cliente sun não encontrado !');
        res.json(clientesun);
    },function(error){
        res.status(404).json(error);
    })
};
/**
 * POST/ clientesun
 */
function adicionarClienteSunAPI(req, res) {
    ClienteSunService.adicionarClienteSun(req.body)
        .then(function (novoClienteSun) {
            return res.json(novoClienteSun);
        }, function (error) {
            return res.status(500).json(error);
        });
}

/**
 * DELETE/ clientesun/:id
 */
function excluirClienteSunAPI(req, res) {
    ClienteSunService.excluirClienteSun(req.params.id)
        .then(function () {
            return res.status(204).end();
        }, function (error) {
            console.log(error);
            return res.status(500).json(error);
        });
}
/**
 * PUT/ clientesun/:id
 */
function atualizaClienteSunAPI(req, res){
    ClienteSunService.atualizarClienteSun(req.params.id, req.body)
    .then(function(clientesun){
        res.json(clientesun);
    },function(error){
        res.status(500).json(error);
    })
};