var mongoose = require('mongoose');
var api = {};

var modelProduto = mongoose.model('Produto');

api.lista = function(request,response){

    modelProduto
        .find({})
        .then(function(produtos){
            response.json(produtos);
        },function(error){
            console.log(error);
            response.status(500).json(error);
        })
};

api.adiciona = function(request,response){
    var produto = request.body;
   
    modelProduto
        .create(produto)
        .then(function(produtoR){
            response.json(produtoR);
        },function(error){
            console.log(error);
            response.status(500).json(error);
        })
};

api.buscarPorId = function(request,response){

    modelProduto
            .findById(request.params.id)
            .then(function(produto){
              if(!produto) throw Error('Produto não encontrado !');
              response.json(produto);
            },function(error){
              console.log(error);
              response.status(404).json(error);
            })
};


api.delete = function(request,response){

      modelProduto
            .remove({_id: request.params.id})
            .then(function(){
                response.sendStatus(204);
            },function(error){
                console.log(error);
                response.status(500).json(error);
            })

};

api.atualiza = function(request,response){

    modelProduto
          .findByIdAndUpdate(request.params.id, request.body)
          .then(function(produto){

              response.json(produto);

          },function(error){
              console.log(error);
              response.status(500).json(error);
          })

};




module.exports = api;
