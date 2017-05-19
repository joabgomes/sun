const VendasService = require('./vendas.service');

const api = {
  adiciona: adicionarVendaAPI
};

module.exports = api;
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