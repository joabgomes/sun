var mongoose = require('mongoose');
             
mongoose.model('Usuario', 
                    mongoose.Schema({nome: String, id: String, senha: String, nivel: String}),
              'Usuario' );


               //seleciona os dados e a collection