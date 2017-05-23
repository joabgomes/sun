process.env.NODE_ENV = 'test';

const server = require('../../../server.js');
const mongoose = require('mongoose');
const Compra = mongoose.model('Compra');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo de Compras', () => {
  beforeEach((done) => {
    Compra.remove({}, (err) => {
      done();
    });
  });

  describe('GET /compras', function ()  {
    it('deve retornar todas as compras da base', (done) => {
      chai.request(server)
        .get('/v1/compras')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);

          done();
        });
    });
  });

  describe('POST /compras', () => {
    it('deve cadastrar uma nova compra na base', (done) => {
      let compra = new Compra ({
        cd_compra: 12345,
        vlr_total: 100,
        num_itens: 1,
        dt_hora: new Date(),
        produtos: [{
                      cd_produto   : 48192,
                      cd_barras    : 21331,
                      nm_item      : 'Produto',
                      vlr_unitario : 10,
                      quantidade   : 10,
                      vlr_total    : 100,
                      validade     : new Date(),
         }],

        loja_compra: {
            cd_loja: 31290,
            nm_loja: 'Sorvetes'
      },

      num_nf: 321039120
      
    });
   

      chai.request(server)
        .post('/v1/compras')
        .send(compra)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body._id.length.should.be.eql(24);

          done();
        });
    });
    it('não deve cadastrar uma compra sem nota fiscal',(done) => {
      let compra = new Compra ({
          cd_compra: 12345,
          vlr_total: 100,
          num_itens: 1,
          dt_hora: new Date(),
          produtos: [{
                        cd_produto   : 48192,
                        cd_barras    : 21331,
                        nm_item      : 'Produto',
                        vlr_unitario : 10,
                        quantidade   : 10,
                        vlr_total    : 100,
                        validade     : new Date(),
          }],

          loja_compra: {
              cd_loja: 31290,
              nm_loja: 'Sorvetes'
        }
      })
      chai.request(server)
        .post('/v1/compras')
        .send(compra)
        .end((err, res) => {
          res.should.have.status(500);
        
        done();
    });
  });
});
  describe('DELETE /compras/:id', () => {
    it('deve excluir uma compra da base a partir do ID', (done) => {
      let compra = new Compra({
          cd_compra: 12345,
            vlr_total: 100,
            num_itens: 1,
            dt_hora: new Date(),
            produtos: [{
                          cd_produto   : 48192,
                          cd_barras    : 21331,
                          nm_item      : 'Produto',
                          vlr_unitario : 10,
                          quantidade   : 10,
                          vlr_total    : 100,
                          validade     : new Date(),
            }],

            loja_compra: {
                cd_loja: 31290,
                nm_loja: 'Sorvetes'
          },

            num_nf: 321039120
          
        });

      compra.save((err, compra) => {
        chai.request(server)
          .del('/v1/compras/' + compra._id)
          .end((err, res) => {
            res.should.have.status(204);

            done();
          });
      });
    });
  });

  describe('GET /compras/:id', () => {
    it('deve retornar uma compra da base a partir do ID', (done) => {
      let compra = new Compra({
          cd_compra: 12345,
          vlr_total: 100,
          num_itens: 1,
          dt_hora: new Date(),
          produtos: [{
                        cd_produto   : 48192,
                        cd_barras    : 21331,
                        nm_item      : 'Produto',
                        vlr_unitario : 10,
                        quantidade   : 10,
                        vlr_total    : 100,
                        validade     : new Date(),
          }],

          loja_compra: {
              cd_loja: 31290,
              nm_loja: 'Sorvetes'
        },

        num_nf: 321039120
        });

      compra.save((err, compra) => {
        
        chai.request(server)
          .get('/v1/compras/' + compra._id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('cd_compra');
            res.body.should.have.property('vlr_total');
            res.body.should.have.property('num_itens');
            res.body.should.have.property('dt_hora');
            res.body.should.have.property('produtos');
            res.body.should.have.property('loja_compra');
            res.body.should.have.property('num_nf');
            res.body.should.have.property('_id').eql(compra.id);

            done();
          });
      });
    });
  });

  describe('PUT /compras/:id', () => {
    it('deve atualizar os dados de uma compra na base', (done) => {
      let compra = new Compra({
          cd_compra: 12345,
            vlr_total: 100,
            num_itens: 1,
            dt_hora: new Date(),
            produtos: [{
                          cd_produto   : 48192,
                          cd_barras    : 21331,
                          nm_item      : 'Produto',
                          vlr_unitario : 10,
                          quantidade   : 10,
                          vlr_total    : 100,
                          validade     : new Date(),
            }],

            loja_compra: {
                cd_loja: 31290,
                nm_loja: 'Sorvetes'
          },

          num_nf: 321039120
          
        });
    
      compra.save((err, compra) => {
        let compraAtualizada = Object.assign(compra);
        compraAtualizada.num_nf = 3000;
        compraAtualizada.num_itens = 2;

        chai.request(server)
          .put('/v1/compras/' + compra._id)
          .send(compraAtualizada)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            
            res.body.should.have.property('cd_compra');
            res.body.should.have.property('vlr_total');
            res.body.should.have.property('num_itens').not.eql(compra.num_itens);
            res.body.should.have.property('dt_hora');
            res.body.should.have.property('produtos');
            res.body.should.have.property('loja_compra');
            res.body.should.have.property('num_nf').not.eql(compra.num_nf);
            res.body.should.have.property('_id').to.eql(compra.id);

            done();
          });
      });
    });
  });
});