var mongoose = require('mongoose');
var Schema = mongoose.Schema;
             
/*mongoose.model('Usuario', 
                    mongoose.Schema({nome: String, id: String, senha: String, nivel: String}),
              'Usuario' );*/
              
var funcionarioSchema = new Schema({

      nome:{
            type:String,
            required: true
      },
      id:{
            type:String,
            required:true
      },
      senha:{
            type:String,
            required:true
      },
      nivel:{
            type:String,
            required:true
      }
});

mongoose.model('Usuario', funcionarioSchema);


               //seleciona os dados e a collection