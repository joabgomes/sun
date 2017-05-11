var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var compraSchema = new Schema({

    nota_fiscal: {type: Number,require: true},
    data_compra:{type: Date,default: Date.now},
    codigo:{type: String,require: true},
    produto:[{type: Schema.Types.ObjectId,ref:'Produto'}],
    quantidade: {type: Number,require: true},
    valor_unitario: {type: Number,require: true},
    valor_total: {type: Number,require: true},
    data_fabricacao: {type: String,require: true},
    validade: {type: String,require: true}

});

var compra = mongoose.model('Compra',compraSchema);


/*compra.find({}).populate('produto').exec(function(err, items,compra) {
    console.log(items[0].compra[0].produto.nm_item); 
});*/
  
   






