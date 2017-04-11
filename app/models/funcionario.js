var mongoose = require('mongoose');

var Schema;

 mongoose.model('ListaUsuario', 
                    mongoose.Schema({nome: String, id: String, nivel: String }),
              'Usuario' );

              
mongoose.model('Usuario', 
                    mongoose.Schema({nome: String, id: String, senha: String, nivel: String}),
              'Usuario' );


               //seleciona os dados e a collection