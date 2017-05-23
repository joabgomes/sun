const VendasService = require('./vendas.service');

const api = {
  adiciona: adicionarVendaAPI,
  buscaPorId: buscarVendaPorIdAPI,
  lista: listarVendasAPI
};
module.exports = api;

/**
 * GET /vendas 
 */
function listarVendasAPI(req,res){
  VendasService.listarVendas()
   .then(function(vendas){
     return res.json(vendas);
   },function(error){
     return res.status(500).json(error);
   });
}

/**
 * POST /vendas
 */
function adicionarVendaAPI(req, res){
  VendasService.adicionarVenda(req.body)
    .then(function(novaVenda){
      return res.json(novaVenda);
    }, function(error){
      return res.status(500).json(error);
    });
}

/**
 * GET /vendas/:id
 */
function buscarVendaPorIdAPI(req,res){
  VendasService.buscarVendaPorId(req.params.id)
    .then(function(venda){
      return res.json(venda);
    }, function(error){
      return res.status(404).json(error);
    });
}