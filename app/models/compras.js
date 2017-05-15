var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compraSchema = new Schema({
  nota_fiscal:      {type: Number, required: true},
  data_compra:      {type: Date, default: Date.now},
  codigo:           {type: String, required: true},
  produto:          [{type: Schema.Types.ObjectId, ref:'Produto'}],
  quantidade:       {type: Number, required: true},
  valor_unitario:   {type: Number, required: true},
  valor_total:      {type: Number, required: true},
  data_fabricacao:  {type: String, required: true}, //por que não sei!?
  validade:         {type: String, required: true} //por que nao usamos Date?
});

var compra = mongoose.model('Compra', compraSchema);