var app = require('./config/express')();
require('./config/database')('localhost/sundb');

app.listen(3000,function(){
    console.log('O servidor foi iniciado!');
});