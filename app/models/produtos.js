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
        type: Number,
        require: true
    },

    unidade: {
        type: Number,
        require: true
    },
    
    marca: {
        type: Number,
        require: true
    },

    modelo: {
        type: String,
        require: true
    },

    status: {
        type: Number,
        require: true
    }
 
});
mongoose.model('Produto',schema);