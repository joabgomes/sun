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
    cd_compra: novaCompra.cd_compra,
    vlr_total: novaCompra.vlr_total,
    num_itens: novaCompra.num_itens,
    dt_hora:   novaCompra.dt_hora,
    produtos: [],
    
    loja_compra: {
      cd_loja: novaCompra.loja_compra.cd_loja,
      nm_loja: novaCompra.loja_compra.nm_loja
    },
  
    num_nf: novaCompra.num_nf, 

  });

  for(let i = 0; i < novaCompra.produtos.length; i++){
    compra.produtos[i] = {
      cd_produto:   novaCompra.produtos[i].cd_produto,
      cd_barras:    novaCompra.produtos[i].cd_barras,
      nm_item:      novaCompra.produtos[i].cd_barras,
      vlr_unitario: novaCompra.produtos[i].vlr_unitario,
      quantidade:   novaCompra.produtos[i].quantidade,
      vlr_total:    novaCompra.produtos[i].vlr_total,
      validade:     novaCompra.produtos[i].validade
    }
  }

  return compra.save();
}

/**
 * Retorna uma compra da base de dados a partir do ID
 * @param {number} idCompra ID da compra a ser pesquisada
 */
function buscarCompraPorId(idCompra) {
  return Compra.findById(idCompra);
}

/**
 * Atualiza as informações de uma determinada compra
 * 
 *  @param {Number} idCompra Id da Compra a ser atualizada
 *  @param {Dados} dados Os dados que vem do body da view
 */
function atualizarCompra(idCompra,dados) {
  return Compra.findByIdAndUpdate(idCompra, dados);
}

/**
 * Exclui uma compra da base de dados a partir do ID
 * @param {Number} idCompra ID da compra a ser excluida
 */
function excluirCompra(idCompra) {
  return Compra.remove({ _id: idCompra });
}