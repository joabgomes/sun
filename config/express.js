var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var consign = require('consign');

module.exports = function () {
  app.set('secret', 'ohomemmacaconaotemalmaenemcoracao');

  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign({ cwd: 'app' })
    .include('models')   //Não precisa mais dar require em todos arquivos dentro da 'api' e da 'routes'
    .then('api/autentica.js')
    .then('api')
    .then('routes')
    .into(app);

  //Registrando módulos
  app.use(require('../app/core/compras/compras.routes'));
  app.use(require('../app/core/usuarios/usuarios.routes'));
  app.use(require('../app/core/produtos/produtos.routes'));
  app.use(require('../app/core/vendas/vendas.routes'));
  app.use(require('../app/core/clienteSun/clientesun.routes'));
  app.use(require('../app/core/estoque/estoque.routes'));
  app.use(require('../app/core/lojas/lojas.routes'));


  return app;
};