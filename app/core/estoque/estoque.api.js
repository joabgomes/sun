const EstoqueService = require('./estoque.service');

const api = {
    lista: listarEstoqueAPI,
    adiciona: adicionarEstoqueAPI,
    buscaPorId: buscarEstoquePorIdAPI,
    exclui: excluirEstoqueAPI,
    atualiza: atualizaEstoqueAPI
};

module.exports = api;

/**
 * GET/ estoque
 */
function listarEstoqueAPI(req, res) {
    EstoqueService.listarEstoque()
        .then(function (estoques) {
            return res.json(estoques);
        }, function (error) {
            return res.status(500).json(error);
        });
}
/**
 * GET/ estoque/:id
 */
function buscarEstoquePorIdAPI(req, res) {
    EstoqueService.buscarEstoquePorId(req.params.id)
    .then(function(estoque){
        if(!estoque) throw Error('Estoque não encontrado !');
        res.json(estoque);
    },function(error){
        res.status(404).json(error);
    })
};
/**
 * POST/ estoque
 */
function adicionarEstoqueAPI(req, res) {
   EstoqueService.adicionarEstoque(req.body)
        .then(function (novoEstoque) {
            return res.json(novoEstoque);
        }, function (error) {
            return res.status(500).json(error);
        });
}

/**
 * DELETE/ estoque/:id
 */
function excluirEstoqueAPI(req, res) {
    EstoqueService.excluirEstoque(req.params.id)
        .then(function () {
            return res.status(204).end();
        }, function (error) {
            console.log(error);
            return res.status(500).json(error);
        });
}
/**
 * PUT/ estoque/:id
 */
function atualizaEstoqueAPI(req, res){
    EstoqueService.atualizarEstoque(req.params.id, req.body)
    .then(function(estoque){
        res.json(estoque);
    },function(error){
        res.status(500).json(error);
    })
};