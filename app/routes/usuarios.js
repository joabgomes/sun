    path = require('path');
module.exports = function(app){

    var api = app.api.funcionario

    app.route('/v1/usuarios')
        .get(api.lista)
        .post(api.adiciona);


    app.route('/v1/usuarios/:id')
        .get(api.buscaPorId)
        .delete(api.deletaPorId)
        .put(api.atualiza);

    
    app.all('/*', function(request, response){
        response.sendFile(path.resolve('public/index.html'));
    });
       
    };
        