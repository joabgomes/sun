var mongoose = require('mongoose');
var api = {};
var modelVenda = mongoose.model('Venda');
var modelProduto = mongoose.model('Produto');

api.adiciona = function(req,res){
    var produtos = req.body;
    
   
    var venda = new modelVenda({
        
        vendas: produtos
        
               
    });

    console.log(venda);

    venda.save(function(error,document){
       
        if(!error) {

            res.json(document);
        } 

    });
}

api.buscarPorId = function(req,res){

    modelProduto.findById(req.params.id).select({"nm_item":1,"preco":1,"cd_barras":1})
    .then(function(produto){

        res.json(produto);
    
    },function(error){
        console.log(error);
        res.status(404).json(error);
    });

}

api.buscar = function(req,res){

    modelProduto.find({}).select({"nm_item":1,"preco":1,"cd_barras":1}).then(function(produtos){

        res.json(produtos);
    
    },function(error){
        console.log(error);
        res.status(500).json(error);
    });
}

module.exports = api;