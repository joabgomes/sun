var app = require('./config/express')();
require('./config/database')('mongodb://localhost/sundb');

app.listen(8080,function(){
    console.log('O servidor foi iniciado!');
});