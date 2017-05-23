var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientesunSchema = new Schema({

  cd_cliente_sun: { type: Number, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cpf_cnpj: { type: String, required: true },
  status: { type: String, required: true }

});

mongoose.model('ClienteSun', clientesunSchema);