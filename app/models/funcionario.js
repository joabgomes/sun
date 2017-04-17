var mongoose = require('mongoose');
             
/*mongoose.model('Usuario', 
                    mongoose.Schema({nome: String, id: String, senha: String, nivel: String}),
              'Usuario' );*/
              
var schema = mongoose.Schema({

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

mongoose.model('Usuario', schema)


               //seleciona os dados e a collection