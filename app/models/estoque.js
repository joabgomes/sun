var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estoqueSchema = new Schema({

  cd_estoque: { type: Number, required: true },
  cd_loja: { type: Number, required: true },
  cd_produto: { type: Number, required: true },
  cd_barras: { type: Number, required: true },
  qtd_estoque: { type: Number, required: true },
  cd_compra: { type: Number, required: true },
  dt_validade: { type: Date, required: true }

});

mongoose.model('Estoque', estoqueSchema);