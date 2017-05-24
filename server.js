var app = require('./config/express')();
var logger = require('./app/util/logger');
require('./config/database')('mongodb://localhost/sundb');

app.listen(3000, '0.0.0.0', function () {
  logger.info('O servidor foi iniciado!');
});

module.exports = app;
