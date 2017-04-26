module.exports = function(app){

    var api = app.api.produtos;

    app.get('/v1/produtos',api.lista);
    app.post('/v1/produtos',api.adiciona);

    app.route('/v1/produtos/:id')
        .get(api.buscarPorId)
        .delete(api.delete)
        .put(api.atualiza);

};
