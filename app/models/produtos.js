var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var produtoSchema = new Schema({

    cd_barras: {type: Number,required: true},
    nm_item: {type: String,required: true},
    tipo_item: {type: String,required: true},
    unidade: {type: String,required: true},
    marca: {type: String,required: true},
    modelo: {type: String,required: true},
    status: {type: String,required: true},
    preco: {type: Number, required: true},
    quantidade: {type: Number, default: 0}

});

var produto = mongoose.model('Produto',produtoSchema);