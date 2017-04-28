module.exports = function(app){

    var api = app.api.compras

    app.route('/v1/compras')
        .get(api.lista)
        .post(api.adiciona);
    
    app.route('/v1/compras/:id')
        .get(api.buscaPorId)
        .delete(api.deletaPorId)
        .put(api.atualiza);     
    };
        