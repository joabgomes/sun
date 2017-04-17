module.exports = function(uri){

    var mongoose = require('mongoose');


    mongoose.connect(uri);

    mongoose.connection.on('connected', function(){
        console.log('Conectado ao banco de dados!');
    });

    mongoose.connection.on('connect',function(error){
        console.log('Erro na conexão: ' + error);
    });

    mongoose.connection.on('disconected',function(){
        console.log('Desconectado do banco de dados!');
    });

    process.on('SIGINT',function(){

        mongoose.connection.close(function(){
            console.log('Conexão com o banco encerrada pelo término da aplicação');
            process.exit(0);
        });

        

    });


}