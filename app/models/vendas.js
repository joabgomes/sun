var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendaSchema = new Schema ({

   vendas:[{}],
   total: {type: Number, default: 0}
   
});

mongoose.model('Venda',vendaSchema);