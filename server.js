var app = require('./config/express')();
require('./config/database')('mongodb://localhost/sundb');

app.listen(3000,'0.0.0.0',function(){
    console.log('O servidor foi iniciado!');
});