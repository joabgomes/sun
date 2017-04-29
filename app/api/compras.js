var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Compra');

api.lista = function(request,response){
   
    model
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
 
        model.create(compra)
        .then(function(compra){
            response.json(compra);
        },function(error){
            console.log(error);
            response.status(500).json(error);
        });
      
   
      
};

api.buscaPorId = function(request,response){

};

api.deletaPorId = function(request,response){

    model  
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