var mongoose = require('mongoose');
var api = {};

var modelProduto = mongoose.model('Produto');

api.mostrar = function(req,res){

    modelProduto.find({}).select({"nm_item":1,"quantidade":1}).then(function(produtos){
        
        res.json(produtos);

    },function(error){
        res.status(500).json(error);
    });
}

api.atualizar = function(req,res){

    modelProduto.findByIdAndUpdate(req.params.id,req.body.quantidade,req.body.nm_item).then(function(produto){

        res.json(produto);
    
    },function(error){
        console.log(error);
        res.status(500).json(error);
    });
  
}

api.buscaPorId = function(req,res){

    modelProduto.findById(req.params.id).select({"nm_item":1,"quantidade":1}).then(function(produto){

        res.json(produto);
    
    },function(error){
        console.log(error);
        res.status(404).json(error);
    });
}

api.deletar = function(req,res){

    modelProduto.remove({_id: req.params.id}).then(function(){
       
        res.sendStatus(204);

    },function(error){
        
        res.status(500).json(error);
    });
}


module.exports = api;