const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');

module.exports = {
    adicionarVenda
}
/**
 * Registra uma nova venda na base de dados
 * 
 * @param {Venda} novaVenda Objeto com os dados da nova venda
 * @returns {Promise<Venda>[]} Model Venda com o _id registrado
 */
function adicionarVenda(novaVenda){
  var venda = new Venda({
     vendas:novaVenda
  })
  return venda.save();
}