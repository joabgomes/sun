module.exports = function(app){

    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');    
    
    var api = {};
    var model = mongoose.model('Usuario');

    api.autentica = function (request,response){

        model.findOne({
            id: request.body.id,
            senha: request.body.senha
        })

        .then(function(usuario){
            if(!usuario){
                console.log('Login/senha inválidos');
                response.sendStatus(401);
            }else{
                console.log(usuario.id);
                var token = jwt.sign({id: usuario.id}, app.get('secret'),{
                    expiresIn: 8640
                });

                console.log('Autenticando: token adicionando na resposta');
                response.set('x-access-token', token);
                response.end();
            }
        },function(error){
            console.log(error);
            response.sendStatus(401);
        });
    };

    api.verificaToken = function(request,response, next){

        var token = request.headers['x-access-token'];

        if(token) {
            console.log('Token recebido,decodificando...');
            jwt.verify(token, app.get('secret'),function(error,decoded){
                if(error){
                    console.log('Token rejeitado');
                    return response.sendStatus(401);
                } else {
                    console.log('Token aceito!')
                    request.usuario = decoded;
                    next();
                    
                }
            });
        }else {
            console.log('Nenhum token enviado...');
            return response.sendStatus(401);
        }   
    }

    return api;
};