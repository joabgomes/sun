var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var consign = require('consign');
var path = require('path');

module.exports = function () {
  app.set('secret', 'ohomemmacaconaotemalmaenemcoracao');

  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign({ cwd: 'app' })
    .include('models')   //Não precisa mais dar require em todos arquivos dentro da 'api' e da 'routes'
    .then('api/autentica.js')
    .then('api')
    .then('routes/autentica.js')
    .then('routes')
    .into(app);

  //Registrando módulos
  app.use(require('../app/core/compras/compras.routes'));
  app.use(require('../app/core/vendas/vendas.routes'));

  return app;
}