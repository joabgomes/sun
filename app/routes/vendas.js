module.exports = function(app){

    var api = app.api.vendas;
    
    app.post('/v1/vendas',api.adiciona);
       
};