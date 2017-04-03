var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var consign = require('consign');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign ({cwd: 'app'})
    .include('api')   //Não precisa mais dar require em todos arquivos dentro da 'api' e da 'routes'
    .then('routes')
    .into(app);

module.exports = app;