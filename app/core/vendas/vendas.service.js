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
  var venda = new Venda ({
    cd_barras: novaVenda.cd_barras,
    cd_estoque: novaVenda.cd_estoque,
    nm_item: novaVenda.nm_item,
    vlr_unitario: novaVenda.vlr_unitario,
    quantidade: novaVenda.quantidade,
    vlr_total: novaVenda.vlr_total,
    loja_venda: {
      cd_loja: novaVenda.loja_venda.cd_loja,
      nm_loja: novaVenda.loja_venda.nm_loja
    },
    usuario_venda: {
      cd_usuario: novaVenda.usuario_venda.cd_usuario,
      nm_usuario: novaVenda.usuario_venda.nm_usuario
    },
    transacao: {
      tp_pagamento: novaVenda.transacao.tp_pagamento,
      vlr_recebido: novaVenda.transacao.vlr_recebido,
      vlr_troco:    novaVenda.transacao.vlr_troco
    },
    num_nf:       novaVenda.num_nf


  });
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

