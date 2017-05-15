module.exports = function(app){

    var api = app.api.estoque;

    app.get('/v1/estoque',api.mostrar);
   
    app.route('/v1/estoque/:id')
        .delete(api.deletar)
        .put(api.atualizar)
        .get(api.buscarPorId)

};