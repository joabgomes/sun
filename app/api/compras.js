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

api.adiciona = function(req,res){
    
    var compra = new modelCompra({

        nota_fiscal: req.body.nota_fiscal,
        codigo: req.body.codigo,
        produto:req.body.produto,
        quantidade:req.body.quantidade,
        valor_unitario:req.body.valor_unitario,
        valor_total: req.body.valor_unitario * req.body.quantidade,
        data_fabricacao: req.body.data_fabricacao,
        validade: req.body.validade,
        codigo_ean: req.body.codigo_ean
    })
    compra.save(function(error,document){
        if(!error) {
            res.json(document);
        }
    });
}
api.buscaPorId = function(req,res){

    modelCompra.findById(req.params.id).then(function(produto){

        if(!produto) throw Error('Produto não encontrado !');

        res.json(produto);
    
    },function(error){
        res.status(404).json(error);
    });
           
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

api.atualiza = function(req,res){

    modelProduto.findByIdAndUpdate(req.params.id, req.params.body).then(function(produto){
        
        if(!produto) throw Error ('Produto não encontrado!');
        
        res.json(produto);
    
    },function(error){
        res.status(500).json(error);
    });

};

module.exports = api;