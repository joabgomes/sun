var mongoose = require('mongoose');
var api = {};

var modelCompra = mongoose.model('Compra');
var modelProduto = mongoose.model('Produto');

api.lista = function(request,response){
   
    modelCompra
        .find({})
        .then(function(compras){
            response.json(compras);
        },function(error){
            console.log(error);
            response.status(500).json(error);
        });
};

api.adiciona = function(request,response){
    var compra = request.body;
 
    modelCompra.create(compra).then(function(compraR){
        response.json(compraR);
    },function(error){
        console.log(error);
        response.status(500).json(error);
    })

};

api.buscaPorId = function(request,response){

};

api.deletaPorId = function(request,response){

    modelCompra 
        .remove({_id: request.params.id})
        .then (function(){
            response.sendStatus(204);
        },function(error){
            console.log(error);
            response.status(500).json(error);
        })

};

api.atualiza = function(request,response){

};

module.exports = api;