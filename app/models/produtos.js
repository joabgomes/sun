var mongoose = require('mongoose');

var schema = mongoose.Schema({

    cd_barras: {
        type: String,
        require: true
    },

    nm_item: {
        type: String,
        require: true
    },

    tipo_item: {
        type: String,
        require: true
    },

    unidade: {
        type: String,
        require: true
    },
    
    marca: {
        type: String,
        require: true
    },

    modelo: {
        type: String,
        require: true
    },

    status: {
        type: String,
        require: true
    }
 
});
mongoose.model('Produto',schema);