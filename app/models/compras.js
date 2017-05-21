var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compraSchema = new Schema({
  cd_compra:        {type: Number, required:true},
  vlr_total:        {type: Number, required:true},
  num_itens:        {type: Number, required:true},
  dt_hora:          {type: Date, required:true},
  produto:          [{
                      cd_produto   : {type: Number, required:true},
                      cd_barras    : {type: Number, required:true},
                      nm_item      : {type: Number, required:true},
                      vlr_unitario : {type: Number, required:true},
                      quantidade   : {type: Number, required:true},
                      vlr_total    : {type: Number, required:true},
                      validade     : {type: Date},
                    }],
  loja_compra: {
    cd_loja: {type: Number, required:true},
    nm_loja: {type: String, required:true}
  },
  
  num_nf:           {type: Number, required: true}

});

var compra = mongoose.model('Compra', compraSchema);