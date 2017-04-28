var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nota_fical: {
        type: Number,
        require: true
    },

    codigo: {
        type: String,
        require: true
    },

    produto: {
        type: String,
        require: true
    },

    quantidade: {
        type: Number,
        require: true
    },

    valor_total: {
        type: Number,
        require: true
    },

    valor_unitario: {
        type: Number,
        require: true
    },

    data_fabricacao: {
        type: Number,
        require: true
    },

    validade: {
        type: Number,
        require: true
    },

    codigo_ean: {
        type: Number,
        require: true
    },
    estoque: {
        type: Number,
        require: true
    }
    
});
mongoose.model('Compra',schema);