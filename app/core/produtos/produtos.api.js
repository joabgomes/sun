const produtosService = require('./produtos.service');

const api = {
    lista: listarProdutosAPI,
    adiciona: adicionarProdutoAPI,
    buscaPorId: buscarProdutoPorIdAPI,
    excluir: excluirProdutoAPI,
    atualiza: atualizarProdutoAPI
};

module.exports = api;

/**
 * GET /produtos
 */

function listarProdutosAPI(req, res){
    produtosService.listarProdutos()
    .then(function(produto){
        return res.json(produto);
    }, function(error){
        return res.status(500).json(error);
    });
}

/**
 * POST /produtos
 */

function adicionarProdutoAPI(req,res){
    produtosService.adicionarProduto(req.body)
        .then(function(produtos){
            res.json(produtos);
        },function(error){
            console.log(error);
            res.status(500).json(error);
        })
};

/**
 * 
 * GET /produtos/:id
 * 
 */
function buscarProdutoPorIdAPI(req, res){
        produtosService.buscarProdutoPorId(req.params.id)
            .then(function(produto){
              if(!produto) throw Error('Produto não encontrado !');
              res.json(produto);
            },function(error){
              console.log(error);
              res.status(404).json(error);
            })
};

/**
 * 
 * DELETE /produtos/:id
 * 
 */
function excluirProdutoAPI(req, res) {
  produtosService.excluirProduto(req.params.id)
    .then(function() {
      return res.status(204).end();
    }, function(error) {
      console.log(error);
      return res.status(500).json(error);
    });
}

/**
 * 
 * PUT /produtos/:id
 * 
 */

function atualizarProdutoAPI(req, res){
    produtosService.atualizarProduto(req.params.id, req.body)
          .then(function(produto){
              res.json(produto);
          },function(error){
              console.log(error);
              res.status(500).json(error);
          })

};