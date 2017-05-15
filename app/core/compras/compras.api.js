const ComprasService = require('./compras.service');

const api = {
  lista: listarComprasAPI,
  adiciona: adicionarCompraAPI,
  buscaPorId: buscarCompraPorIdAPI,
  atualiza: atualizarCompraAPI,
  exclui: excluirCompraAPI
};

module.exports = api;

/**
 * GET /compras
 */
function listarComprasAPI(req, res) {
  ComprasService.listarCompras()
    .then(function(compras) {
      return res.json(compras);
    }, function(error) {
      return res.status(500).json(error);
    });
}

/**
 * GET /compras/:id
 */
function buscarCompraPorIdAPI(req, res) {
  return res.status(501).end();
}

/**
 * POST /compras
 */
function adicionarCompraAPI(req, res) {
  ComprasService.adicionarCompra(req.body)
    .then(function(novaCompra) {
      return res.json(novaCompra);
    }, function(error) {
      return res.status(500).json(error);
    });
}

/**
 * DELETE /compras/:id
 */
function excluirCompraAPI(req, res) {
  ComprasService.excluirCompra(req.params.id)
    .then(function() {
      return res.status(204).end();
    }, function(error) {
      console.log(error);
      return res.status(500).json(error);
    });
}

/**
 * PUT /compras/:id
 */
function atualizarCompraAPI(req, res) {
  return res.status(501).end();
}