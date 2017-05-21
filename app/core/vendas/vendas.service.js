const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');

module.exports = {
    adicionarVenda,
    buscarVendaPorId,
    listarVendas
};

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

/**
 * Busca por Id uma venda na base de dados
 * 
 * @param {Number} vendaId Id a venda a ser pesquisada
 */
function buscarVendaPorId(vendaId){
  return Venda.findById(vendaId);
}

