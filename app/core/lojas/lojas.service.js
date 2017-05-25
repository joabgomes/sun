const mongoose = require('mongoose');
const Loja = mongoose.model('Loja');

module.exports = {
  listarLojas,
  adicionarLoja,
  excluirLoja,
  atualizarLoja,
  buscarPorId,
};

/**
 * Lista todas as lojas cadastradas
 * @returns {Promise<Loja>[]} Array do model Loja
 */
function listarLojas(){
  return Loja.find();
}

/**
 * Registra uma nova loja na base
 * 
 * @param {Loja} novaLoja Objeto com os dados da nova Loja
 * @returns {Promise<Loja>} model Loja com o _id registrado
 */
function adicionarLoja(novaLoja){
  var loja = new Loja({

     cd_loja:        novaLoja.cd_loja,
     cd_cliente_sun: novaLoja.cd_cliente_sun,
     nm_loja:        novaLoja.nm_loja,
     cpf_cnpj:       novaLoja.cpf_cnpj,
     endereco:{
        logadouro:   novaLoja.endereco.logadouro,
        numero:      novaLoja.endereco.numero,
        complemento: novaLoja.endereco.complemento,
        cep:         novaLoja.endereco.cep,
        cidade:      novaLoja.endereco.cidade,
        uf:          novaLoja.endereco.uf,
        pais:        novaLoja.endereco.pais
      },
     telefones:[]
  });

  for(let i = 0; i < novaLoja.telefones.length; i++){

    loja.telefones[i] = {
        desc_telefone: novaLoja.telefones[i].desc_telefone,
        cd_pais:       novaLoja.telefones[i].cd_pais,
        cd_ddd:        novaLoja.telefones[i].cd_ddd,
        num_telefone:  novaLoja.telefones[i].num_telefone
    }
  }
  return loja.save();
};

/**
 * Exclui uma loja da base a partir do ID
 * 
 * @param {Number} idLoja ID da loja a ser excluida
 */
function excluirLoja(idLoja){
  return Loja.remove({ _id: idLoja });
}

/**
 *  Atualiza as informações de uma loja
 *  @param {Number} idLoja Id da Loja a ser atualizada
 *  @param {Dados} dados Os dados que vem do body da view
 */
function atualizarLoja(idLoja, dados){
  return Loja.findByIdAndUpdate(idLoja, dados);
}

/**
 * Retorna uma loja da base de dados a partir do ID
 * @param {number} idLoja ID da loja a ser pesquisada
 */
function buscarPorId(idLoja){
  return Loja.findById(idLoja);
}


