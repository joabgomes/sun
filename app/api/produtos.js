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
        .create({produto})
        .then(function(produtoR){
            response.json(produtoR);
        }, function(error){
            console.log(error);
            response.status(500).json(error);
        })
};

api.delete = function(request,response){

};

api.atualiza = function(request,response){

};

module.exports = api;