const mongoose = require('mongoose');
const Compra = mongoose.model('Compra');
const Produto = mongoose.model('Produto');

module.exports = {
  listarCompras,
  adicionarCompra,
  buscarCompraPorId,
  atualizarCompra,
  excluirCompra
};

/**
 * Lista todas as compras realizadas
 * 
 * @returns {Promise<Compra>[]} Array do model Compra
 */
function listarCompras() {
  return Compra.find();
}

/**
 * Registra uma nova compra na base de dados
 * 
 * @param {Compra} novaCompra Objeto com os dados da nova compra
 * @returns {Promise<Compra>} Model Compra com o _id registrado
 */
function adicionarCompra(novaCompra) {
  var compra = new Compra({
    nota_fiscal: novaCompra.nota_fiscal,
    codigo: novaCompra.codigo,
    produto: novaCompra.produto,
    quantidade: novaCompra.quantidade,
    valor_unitario: novaCompra.valor_unitario,
    valor_total: novaCompra.valor_unitario * novaCompra.quantidade,
    data_fabricacao: novaCompra.data_fabricacao,
    validade: novaCompra.validade,
    codigo_ean: novaCompra.codigo_ean //o que é essa informacao? nao está no schema de Compra
  });

  return compra.save();
}

/**
 * Retorna uma compra da base de dados a partir do ID
 * @param {number} idCompra ID da compra a ser pesquisada
 */
function buscarCompraPorId(idCompra) {
  //TO DO: me implemente
  return null;
}

/**
 * Atualiza as informações de uma determinada compra
 */
function atualizarCompra() {
  //TO DO: me implemente
  return null;
}

/**
 * Exclui uma compra da base de dados a partir do ID
 * @param {Number} idCompra ID da compra a ser excluida
 */
function excluirCompra(idCompra) {
  return Compra.remove({ _id: idCompra });
}