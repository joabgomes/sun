const VendasService = require('./vendas.service');

const api = {
  adiciona: adicionarVendaAPI,
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
function adicionarVendaAPI(req,res){
  VendasService.adicionarVenda(req.body)
   .then(function(vendas){
     return res.json(vendas);
},function(error){
    return res.status(500).json(error);
});
}