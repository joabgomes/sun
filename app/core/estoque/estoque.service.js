const mongoose = require('mongoose');
const Estoque = mongoose.model('Estoque');

module.exports = {
    listarEstoque,
    adicionarEstoque,
    buscarEstoquePorId,
    atualizarEstoque,
    excluirEstoque
};

/**
 * Listar os estoques Sun cadastrado
 * 
 * @returns {Promise<Estoque>[]} array do model estoque Sun
 */
function listarEstoque() {
    return Estoque.find();
}

/**
 * Registra um novo estoque da base de dados
 * 
 * @param {Estoque} novoEstoque objeto com os dados do novo estoque 
 * @returns {Promise<Estoque>} model estoque com _id registrado
 */
function adicionarEstoque(novoEstoque) {
    var estoque = new Estoque({
        
        cd_estoque: novoEstoque.cd_estoque,
        cd_loja: novoEstoque.cd_loja,
        cd_produto: novoEstoque.cd_produto,
        cd_barras: novoEstoque.cd_barras,
        qtd_estoque: novoEstoque.qtd_estoque,
        cd_compra: novoEstoque.cd_compra,
        dt_validade: novoEstoque.dt_validade

    });

    return estoque.save();
}
/**
 * Retorna um estoque a partir da base de dados ID
 * @param {number} idEstoque ID do estoque a ser pesquisado
 */
function buscarEstoquePorId(idEstoque) {
    return Estoque.findById(idEstoque);
}
/**
 * Atualiza os dados de um estoque a partir do Id
 * 
 * @param {Number} idEstoque Id do estoque a ser atualizado
 * @param {Dados} dados Os dados que vem do body da view
 */ 
function atualizarEstoque(idEstoque, dados) {
    return Estoque.findByIdAndUpdate(idEstoque, dados);
}
/**
 * Exclui um estoque da base de dados a partir do ID
 * @param {Number} idEstoque ID do estoque a ser excluida
 */
function excluirEstoque(idEstoque) {
    return Estoque.remove({ _id: idEstoque });
}