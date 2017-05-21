module.exports = function (uri) {
  var logger = require('../app/util/logger');
  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  mongoose.connect(uri);

  mongoose.connection.on('connected', function () {
    logger.info('Conectado ao banco de dados!');
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      logger.info('Conexão com o banco encerrada pelo término da aplicação');
      process.exit(0);
    });
  });
};