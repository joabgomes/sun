var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var produtoSchema = new Schema({

    cd_barras: {type: Number,require: true},
    nm_item: {type: String,require: true},
    tipo_item: {type: String,require: true},
    unidade: {type: String,require: true},
    marca: {type: String,require: true},
    modelo: {type: String,require: true},
    status: {type: String,require: true},
    preco: {type: Number, require: true},
    quantidade: {type: Number, default: 0}

});

var produto = mongoose.model('Produto',produtoSchema);