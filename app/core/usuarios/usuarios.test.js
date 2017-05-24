process.env.NODE_ENV = 'test';

const server = require('../../../server.js');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo de Usuarios', () => {
  beforeEach((done) => {
    Usuario.remove({}, (err) => {
      done();
    });
  });

  describe('GET/usuarios', function () {
    it('deve retornar todos os usuarios da base de dados', (done) => {
      chai.request(server)
        .get('/v1/usuarios')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);

          done();
        });   
      });
    });

  describe('POST/usuarios', () => {
    it('deve cadastrar um novo usuario na base', (done) => {
      let usuario = {
        nome: 'nome_user',
        id: 'id_user',
        senha: 'senha_user',
        nivel: 'admin',
      };

      chai.request(server)
        .post('/v1/usuarios')
        .send(usuario)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body._id.length.should.be.eql(24);
           
          done();
        });
    });

    it('não deve cadastrar um novo usuario na base de dados sem nome', (done) =>{
      let usuario = {
       id: 'id_user',
       senha: 'senha_user',
       nivel: 'admin',
      };
      chai.request(server)
      .post('/v1/usuarios')
      .send(usuario)
      .end((err, res) => {
        res.should.have.status(500);

        done();
      });
    });
});

describe('DELETE /usuarios/:id' , () =>{
  it('deve excluir um usuario da base a partir do ID', (done) => {
    let usuario = new Usuario({
      nome: 'nome_user',
      user_id: 'id_user',
      senha: 'senha_user',
      nivel: 'admin',
    }); 
    usuario.save((err, usuario) =>{

      chai.request(server)
        .del('/v1/usuarios/' + usuario._id)
        .end((err, res) => {
          res.should.have.status(204);

          done();
        });
      });
    });
 });

 describe('GET /usuarios/:id', () => {
   it('deve retornar um usuario da base a partir do ID', (done) => {
     let usuario = new Usuario ({
       nome: 'nome_user',
       user_id: 'id_user',
       senha: 'senha_user',
       nivel: 'admin'
     });
     usuario.save((err, usuario) => {
      
       chai.request(server)
         .get('/v1/usuarios/' + usuario._id)
         .end((err, res) => {
           res.should.have.status(200);
           res.body.should.have.be.a('object');
           res.body.should.have.property('nome');
           res.body.should.have.property('user_id');
           res.body.should.have.property('senha');
           res.body.should.have.property('nivel');
           res.body.should.have.property('_id').to.equal(usuario.id);

           done();
         });
       });
     });
   });

   describe('PUT /usuarios/:id', () => {
     it('deve atualizar o usuario na base de dados', (done) => {
       let usuario = new Usuario({
         nome: 'nome_user',
         user_id: 'id_user',
         senha: 'senha_user',
         nivel: 'admin'
       });
       usuario.save((err, usuario) => {

         let usuarioAtualizado = Object.assign(usuario);
         usuarioAtualizado.nome = 'nome_ADMIN';
         usuarioAtualizado.user_id = 'id_ADMIN';

         chai.request(server)
           .put('/v1/usuarios/' + usuario._id)
           .send(usuarioAtualizado)
           .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.should.have.property('nome').not.equal(usuario.nome);
             res.body.should.have.property('user_id').not.equal(usuario.user_id);
             res.body.should.have.property('senha');
             res.body.should.have.property('nivel');
             res.body.should.have.property('_id').to.equal(usuario.id);
            
             done();
          });
        });
      });
    });
  });
 

