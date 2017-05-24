var mongoose = require('mongoose');
var Schema = mongoose.Schema;
              
var funcionarioSchema = new Schema({
      nome:       {type:String, required: true},
      user_id:    {type:String, required:true},
      senha:      {type:String, required:true},
      nivel:      {type:String, required:true}
});

var usuario = mongoose.model('Usuario', funcionarioSchema);