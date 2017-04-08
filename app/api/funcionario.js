var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Usuario');



api.lista = function(request,response){
    model
        .find({})
        .then(function(usuarios){
            response.json(usuarios);
        },function(error){
            console.log(error);
            response.status(500).json(error);
        });
};

api.adiciona = function(request,response){
    var usuario = request.body;
    model
        .create (usuario)
        .then (function(usuario){
            response.json(usuario);
        },function(error){
            console.log(error);
            response.status(500).json(error);
        });

};

api.buscaPorId = function(request,response){

};

api.deletaPorId = function(request,response){

};

api.atualiza = function(request,response){

};

module.exports = api;