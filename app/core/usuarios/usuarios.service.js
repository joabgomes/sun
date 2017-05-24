const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');


module.exports = {
    listarUsuarios,
    adicionarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    excluirUsuario
}

/**
 * Listar os usuarios cadastrado
 * 
 * @returns {Promise<Usuario>[]} array do model Usuario
 */
function listarUsuarios() {
    return Usuario.find();
}

/**
 * Registra um novo usuario da base de dados
 * 
 * @param {Usuario} novoUsuario objeto com os dados do novo usuario
 * @returns {Promise<Usuario>} model Usuario com _id registrado
 */
function adicionarUsuario(novoUsuario){
    var usuario = new Usuario({
        nome: novoUsuario.nome,
        user_id: novoUsuario.id,
        senha: novoUsuario.senha,
        nivel: novoUsuario.nivel
    });
    return usuario.save();
}

/**
 * Retorna um usuario a partir da base de dados ID
 * @param {Number} idUsuario ID do usuario a ser pesquisado
 */
function buscarUsuarioPorId(idUsuario){
    return Usuario.findById(idUsuario);
}
/**
 * Atualiza as informações de um determinado usuario
 * @param {Number} idUsuario Id do usuario a ser atualizado
 * @param {Dados} dados Os dados que vem do body da view
 */
function atualizarUsuario(idUsuario, dados){
    return Usuario.findByIdAndUpdate(idUsuario, dados);
}
/**
 * Exclui um usuario da base de dados a partir do ID
 * @param {Number} idUsuario ID do usuario a ser excluida
 */
function excluirUsuario(idUsuario){
    return Usuario.remove({_id: idUsuario});
}