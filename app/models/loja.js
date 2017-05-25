var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var lojaSchema = new Schema ({
  cd_loja:        {type:Number, required:true},
  cd_cliente_sun: {type:Number, required:true},
  nm_loja:        {type:String, required:true},
  cpf_cnpj:       {type:String},
  endereco:{
    logadouro:   {type:String},
    numero:      {type:Number},
    complemento: {type:String},
    cep:         {type:String},
    cidade:      {type:String},
    uf:          {type:String},
    pais:        {type:String}
  },
  telefones:[{
    desc_telefone: {type:String},
    cd_pais:       {type:Number},
    cd_ddd:        {type:Number},
    num_telefone:  {type:String}
  }]
});

var lojas = mongoose.model('Loja',lojaSchema);

