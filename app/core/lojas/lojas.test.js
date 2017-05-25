process.env.NODE_ENV = 'test';

const server = require('../../../server.js');
const mongoose = require('mongoose');
const Loja = mongoose.model('Loja');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo de Lojas', () => {
  beforeEach((done) => {
    Loja.remove({}, (err) => {
      done();
    });
  });

  describe('GET /lojas', function ()  {
    it('deve retornar todos as lojas da base', (done) => {
      chai.request(server)
        .get('/v1/lojas')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);

          done();
        });
      });
    });

    describe('POST /lojas',() => {
      it('Deve cadastrar uma nova loja na base', (done) => {
        let loja = new Loja ({
          cd_loja:        4320,
          cd_cliente_sun: 321321,
          nm_loja:        'Frutos de Goias',
          cpf_cnpj:       '102930daskj',
          endereco:{
              logadouro:   'Quebrada',
              numero:      526,
              complemento: 'casa',
              cep:         '3291093102',
              cidade:      'Um lugar distante',
              uf:          'S/A',
              pais:        'Brasil'
            },
          telefones:[{
            desc_telefone: '1234567',
            cd_pais:        55,
            cd_ddd:         11,
            num_telefone:  '9032190'
          }]
        });

        chai.request(server)
          .post('/v1/lojas')
          .send(loja)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('_id');
            res.body._id.length.should.be.eql(24);

           done();
          });
      });
      it('Não deve cadastrar sem o cd_loja', (done) => {   
        let loja = new Loja ({
          cd_cliente_sun: 321321,
          nm_loja:        'Frutos de Goias',
          cpf_cnpj:       '102930daskj',
          endereco:{
              logadouro:   'Quebrada',
              numero:      526,
              complemento: 'casa',
              cep:         '3291093102',
              cidade:      'Um lugar distante',
              uf:          'S/A',
              pais:        'Brasil'
            },
          telefones:[{
            desc_telefone: '1234567',
            cd_pais:        55,
            cd_ddd:         11,
            num_telefone:  '9032190'
          }]
        })
        
        chai.request(server)
          .post('/v1/lojas')
          .send(loja)
          .end((err, res) => {
            res.should.have.status(500);

            done();
          });
      });
    });
    describe('DELETE lojas/:id', () => {
      it('Deve deletar uma loja da base de dados', (done) => {
        let loja = new Loja({
          cd_loja:        4320,
          cd_cliente_sun: 321321,
          nm_loja:        'Frutos de Goias',
          cpf_cnpj:       '102930daskj',
          endereco:{
              logadouro:   'Quebrada',
              numero:      526,
              complemento: 'casa',
              cep:         '3291093102',
              cidade:      'Um lugar distante',
              uf:          'S/A',
              pais:        'Brasil'
            },
          telefones:[{
            desc_telefone: '1234567',
            cd_pais:        55,
            cd_ddd:         11,
            num_telefone:  '9032190'
          }]
        });
        
        loja.save((err, loja) => {
         
          chai.request(server)
            .del('/v1/lojas/' + loja._id)
            .end((err,res) => {
              res.should.have.status(204);

              done();
            });
        });
      });
    });
    describe('GET lojas/:id', () => {
      it('Deve retornar uma loja pelo seu ID', (done) => {
        let loja = new Loja({
          cd_loja:        4320,
          cd_cliente_sun: 321321,
          nm_loja:        'Frutos de Goias',
          cpf_cnpj:       '102930daskj',
          endereco:{
              logadouro:   'Quebrada',
              numero:      526,
              complemento: 'casa',
              cep:         '3291093102',
              cidade:      'Um lugar distante',
              uf:          'S/A',
              pais:        'Brasil'
            },
          telefones:[{
            desc_telefone: '1234567',
            cd_pais:        55,
            cd_ddd:         11,
            num_telefone:  '9032190'
          }]
      });
      loja.save((err,loja) => {

        chai.request(server)
          .get('/v1/lojas/' + loja._id)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('cd_cliente_sun');
            res.body.should.have.property('nm_loja')
            res.body.should.have.property('cpf_cnpj')
            res.body.should.have.property('endereco')
            res.body.should.have.property('telefones')
            res.body.should.have.property('_id').eql(loja.id);

            done();
          });
       });
     });
   });     
   describe('PUT /lojas/:id', () => {
     it('deve atualizar uma loja na base', (done) => {
       let loja = new Loja({
         cd_loja:        4320,
          cd_cliente_sun: 321321,
          nm_loja:        'Frutos de Goias',
          cpf_cnpj:       '102930daskj',
          endereco:{
              logadouro:   'Quebrada',
              numero:      526,
              complemento: 'casa',
              cep:         '3291093102',
              cidade:      'Um lugar distante',
              uf:          'S/A',
              pais:        'Brasil'
            },
          telefones:[{
            desc_telefone: '1234567',
            cd_pais:        55,
            cd_ddd:         11,
            num_telefone:  '9032190'
          }]
       })
       loja.save((err, loja) => {
        let lojaAtualizada = Object.assign(loja);
        lojaAtualizada.cd_loja = 3000;
        lojaAtualizada.cd_cliente_sun = 1;
        

        chai.request(server)
          .put('/v1/lojas/' + loja._id)
          .send(lojaAtualizada)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');

            res.body.should.have.property('cd_loja').not.eql(loja.cd_loja)
            res.body.should.have.property('cd_cliente_sun').not.eql(loja.cd_cliente_sun);
            res.body.should.have.property('nm_loja');
            res.body.should.have.property('cpf_cnpj');
            res.body.should.have.property('endereco');
            res.body.should.have.property('telefones');
            res.body.should.have.property('_id').eql(loja.id);

            done();
        });
      });
    });
  });
});