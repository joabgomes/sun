var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendaSchema = new Schema ({

   cd_barras:    {type:Number},
   cd_estoque:   {type:Number, required:true},
   nm_item:      {type:String, required:true},
   vlr_unitario: {type:String, required:true},
   quantidade:   {type:Number, required:true},
   vlr_total:    {type:Number, required:true},
   loja_venda: {
     cd_loja: {type:Number, required:true},
     nm_loja: {type:String, required:true}
   },
   usuario_venda: {
     cd_usuario: {type:Number, required:true},
     nm_usuario: {type:String, required:true}
   },
   transacao: {
     tp_pagamento: {type:String, required:true},
     vlr_recebido: {type:Number, required:true},
     vlr_troco:    {type:Number, required:true}
   },
   num_nf:       {type:Number, required:true}

});

mongoose.model('Venda',vendaSchema);