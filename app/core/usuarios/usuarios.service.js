const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports ={
    listarUsuarios,
    adicionarUsuario,
    buscarPorId,
    atualizarUsuario,
    excluirUsuario
};

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
        id: novoUsuario.id,
        senha: novoUsuario.senha,
        nivel: novoUsuario.nivel
    });

return usuario.save();
}
/**
 * Retorna um usuario a partir da base de dados ID
 * @param {number} idUsuario ID do usuario a ser pesquisado
 */
function buscarPorId(idUsuario){
    //TO DO: me implante 
    return null;
}
/**
 * Atualiza as informações de um determinado usuario
 */
function atualizarUsuario(){
//TO DO: me implante
    return null;
}
/**
 * Exclui um usuario da base de dados a partir do ID
 * @param {Number} idUsuario ID do usuario a ser excluida
 */
function excluirUsuario(idUsuario){
    return Usuario.remove({_id: idUsuario});
}