module.exports = function(app){

    var api = app.api.funcionario

    app.route('/funcionario')
        .get(api.lista)
        .post(api.adiciona);


    app.route('/funcionario/:id')
        .get(api.buscaPorId)
        .delete(api.deletaPorId)
        .put(api.atualiza);

};