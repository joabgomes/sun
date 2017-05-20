var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendaSchema = new Schema ({

   vendas:[
     {
        produto    : {type:Schema.Types.ObjectId, required:true},
        preco      : {type:Number, required:true},
        quantidade : {type:Number, required:true},
        valor      : {type:Number, required:true}
     }
   ],
   
});

mongoose.model('Venda',vendaSchema);