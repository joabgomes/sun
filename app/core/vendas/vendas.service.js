const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');

module.exports = {
    adicionarVenda,
    listarVendas
}
/**
 * Lista todas as vendas realizadas
 * 
 * @return {Promisse<Venda>[]} Array do model Venda
 */
function listarVendas(){
  return Venda.find();
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