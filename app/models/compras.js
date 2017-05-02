var mongoose = require('mongoose');


var schema = mongoose.Schema({

    nota_fiscal: {
        type: Number,
        require: true
    },

    codigo: {
        type: String,
        require: true
    },

    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
        
    },
    quantidade: {
        type: Number,
        require: true
    },

    


    valor_unitario: {
        type: Number,
        require: true
    },

     valor_total: {
        type: Number,
        require: true
    },

    data_fabricacao: {
        type: String,
        require: true
    },

    validade: {
        type: String,
        require: true
    },

    codigo_ean: {
        type: Number,
        require: true
    }

    
});
mongoose.model('Compra',schema);