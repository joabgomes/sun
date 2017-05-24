const mongoose = require('mongoose');
const Compra = mongoose.model('Compra');
const Produto = mongoose.model('Produto');


module.exports = {
    listarProdutos,
    adicionarProduto,
    buscarProdutoPorId,
    atualizarProduto,
    excluirProduto
}


/**
 * Lista os produtos no banco
 * 
 * @returns {Promise<Produto>[]} Array do model Produtos
 */
function listarProdutos() {
    return Produto.find();
}

/**
 * Adicionar produtos ao banco
 * 
 * @returns {Produto} novoProduto Objeto com os dados do novo produto
 * @returns {Promise<Produto>} Model Produto com o _id registrado
 */
function adicionarProduto(novoProduto){
    var produto = new Produto({
        nm_item: novoProduto.nm_item,
        cd_produto: novoProduto.cd_produto,
        cd_barras: novoProduto.cd_barras,
        vlr_unitario: novoProduto.vlr_unitario,
        unidade: novoProduto.unidade,
        fabricante: {
            nm_fabricante: novoProduto.fabricante.nm_fabricante,
            cnpj: novoProduto.fabricante.cnpj
        },
        categoria: novoProduto.categoria,
        modelo: novoProduto.modelo,
        loja: {
            cd_loja: novoProduto.loja.cd_loja,
            nm_loja: novoProduto.loja.nm_loja
        },
        status: novoProduto.status
    });
    return produto.save();
}

/**
 * Retorna um produto do banco a partir do Id
 * 
 * @param {Number} idProduto Id do produto a ser pesquisado
 */
function buscarProdutoPorId(idProduto){
    return Produto.findById(idProduto);
}

/**
 * Atualiza os dados de um produto a partir do Id
 * 
 * @param {Number} idProduto Id do produto a ser atualizado
 * @param {Dados} dados Os dados que vem do body da view
 */ 
function atualizarProduto(idProduto, dados){
    return Produto.findByIdAndUpdate(idProduto, dados);
}

/**
 * Exclui um produto da base de dados a partir do Id 
 * 
 * @param {Number} idProduto Id do produto a ser excluido
 */
function excluirProduto(idProduto){
    return Produto.remove({ _id: idProduto });
}