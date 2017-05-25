const LojasService = require('./lojas.service')

const api = {
  lista:listarLojasAPI,
  adiciona:adicionarLojasAPI,
  buscaPorId:buscarLojasPorIdAPI,
  exclui:excluirLojasAPI,
  atualiza:atualizarLojasAPI

}
module.exports = api;

/**
 * GET /lojas 
 */
function listarLojasAPI(req,res){
  LojasService.listarLojas()
  .then(function(lojas){
    return res.json(lojas);
  }, function(error){
    return res.status(500).json(error);
  });
}
/** 
 * POST /lojas
*/
function adicionarLojasAPI(req,res){
  LojasService.adicionarLoja(req.body)
  .then(function(loja){
    return res.json(loja);
  }, function(error){
    return res.status(500).json(error);
  });
}
/** 
 * DELETE /lojas
 */
function excluirLojasAPI(req,res){
  LojasService.excluirLoja(req.params.id)
  .then(function(){
    return res.status(204).end();
  }, function(error){
    return res.status(500).json(error);
  });
}
/** 
 * PUT /lojas
 */
function atualizarLojasAPI(req,res){
  LojasService.atualizarLoja(req.params.id, req.body)
  .then(function(loja){
    return res.json(loja);
  }, function(error){
    return res.status(500).json(error);
  });
}

function buscarLojasPorIdAPI(req,res){
  LojasService.buscarPorId(req.params.id)
  .then(function(loja){
    return res.json(loja);
  }, function(error){
    return res.status(404).json(error);
  });
}


