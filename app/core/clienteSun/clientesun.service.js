const mongoose = require('mongoose');
const ClienteSun = mongoose.model('ClienteSun');

module.exports = {
    listarClienteSun,
    adicionarClienteSun,
    buscarClienteSunPorId,
    atualizarClienteSun,
    excluirClienteSun
};

/**
 * Listar os Clientes Sun cadastrado
 * 
 * @returns {Promise<ClienteSun>[]} array do model Cliente Sun
 */
function listarClienteSun() {
    return ClienteSun.find();
}

/**
 * Registra um novo cliente sun da base de dados
 * 
 * @param {ClienteSun} novoClienteSun objeto com os dados do novo cliente sun
 * @returns {Promise<ClienteSun>} model cliente sun com _id registrado
 */
function adicionarClienteSun(novoClienteSun) {
    var clientesun = new ClienteSun({
        cd_cliente_sun: novoClienteSun.cd_cliente_sun,
        email: novoClienteSun.email,
        senha: novoClienteSun.senha,
        cpf_cnpj: novoClienteSun.cpf_cnpj,
        status: novoClienteSun.status
    });

    return clientesun.save();
}
/**
 * Retorna um cliente sun a partir da base de dados ID
 * @param {number} idClienteSun ID do cliente sun a ser pesquisado
 */
function buscarClienteSunPorId(idClienteSun) {
    return ClienteSun.findById(idClienteSun);
}
/**
 * Atualiza os dados de um cliente sun a partir do Id
 * 
 * @param {Number} idClienteSun Id do cliente sun a ser atualizado
 * @param {Dados} dados Os dados que vem do body da view
 */ 
function atualizarClienteSun(idClienteSun, dados) {
    return ClienteSun.findByIdAndUpdate(idClienteSun, dados);
}
/**
 * Exclui um cliente sun da base de dados a partir do ID
 * @param {Number} idClienteSun ID do cliente sun a ser excluida
 */
function excluirClienteSun(idClienteSun) {
    return ClienteSun.remove({ _id: idClienteSun });
}