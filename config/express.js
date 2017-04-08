var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

module.exports = function(){

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

consign ({cwd: 'app'})
    .include('models')   //Não precisa mais dar require em todos arquivos dentro da 'api' e da 'routes'
    .then('api')
    .then('routes')
    .into(app);

    return app;

}
