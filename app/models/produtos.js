var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var produtoSchema = new Schema({
 
    nm_item:      {type: String,required: true},
    cd_produto:   {type: Number,required: true},
    cd_barras:    {type: Number,required: true},
    vlr_unitario: {type: Number, required: true},
    unidade:      {type: String,required: true},
    fabricante:   {
                  nm_fabricante :  {type: String, required:true},
                  cnpj  :  {type: String, required: true},      
    },
    categoria:    {type: String,required: true},
    modelo:       {type: String,required: true},
    loja:         {
                  cd_loja  :  {type: Number, required: true},
                  nm_loja  :  {type: String, required: true},
    },
    status:       {type: String,required: true},
    quantidade:   {type: Number, default: 0}

});

var produto = mongoose.model('Produto',produtoSchema);