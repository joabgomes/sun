module.exports = function(app){

    var api = app.api.produtos;

    app.get('/v1/produtos',api.lista);
    app.post('/v1/produtos',api.adiciona);

    app.delete('/v1/produtos/:id',api.delete);
    app.put('/v1/produtos/:id',api.atualiza);      


};