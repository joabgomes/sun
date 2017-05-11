var mongoose = require('mongoose');
var api = {};
var modelVenda = mongoose.model('Venda');

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
};

module.exports = api;