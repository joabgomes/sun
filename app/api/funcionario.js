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
    var usuarioExistente = request.body.id;
   
    model.findOne({id:usuarioExistente})
     .then(function(usuarioIgual){
        if(usuarioIgual){
            console.log('Já existe um usuário com este Id');
            return response.status(302).json(usuarioIgual);
        }else{
            model.create(usuario)
            .then (function(usuario){
                response.json(usuario);
            },function(error){
                console.log(error);
                response.status(500).json(error);
            });
       }
   })
      
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