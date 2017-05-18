var express = require('express');
var VendasAPI = require('./vendas.api');
var router = express.Router();

router.route('/v1/vendas')
    .post(VendasAPI.adiciona);

module.exports = router; 
