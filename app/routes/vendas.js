module.exports = function(app){

    var api = app.api.vendas;
    
    app.post('/v1/vendas',api.adiciona);
    app.get('/v1/vendas',api.buscar);
    
    app.route('/v1/vendas/:id')
        .get(api.buscarPorId);
       
};