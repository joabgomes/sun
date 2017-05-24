process.env.NODE_ENV = 'test';

const server = require ('../../../server.js');
const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo de Vendas', () => {
  beforeEach((done) => {
    Venda.remove({}, (err) => {
      done();
    });
});
  describe('GET /vendas', () => {
    it('Deve retornar todas as vendas registradas na base',(done) =>{
      chai.request(server)
      .get('/v1/vendas')
      .end((err,res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);

        done();
      });
    });
  });

  describe('GET /vendas/:id', () => {
    it('Deve retornar uma venda pelo seu id', (done) => {
      let venda = new Venda({
       
          cd_barras: 789451238,
          cd_estoque: 312312,
          nm_item: 'Sorvete de Baunilha',
          vlr_unitario: 3,
          quantidade: 2,
          vlr_total: 6,
          
          loja_venda: {
            cd_loja: 21390,
            nm_loja: 'Kibom'
          },
          usuario_venda: {
            cd_usuario: 32190,
            nm_usuario: 'Juvenal'
          },
          transacao: {
            tp_pagamento: 'Dinheiro',
            vlr_recebido: 10,
            vlr_troco: 4,
          },
          num_nf: 39210
      });
      venda.save((err,venda) => {
        
        chai.request(server)
        .get('/v1/vendas/' + venda._id)
        .end((err,res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('cd_barras');
          res.body.should.have.property('cd_estoque');
          res.body.should.have.property('nm_item');
          res.body.should.have.property('vlr_unitario');
          res.body.should.have.property('quantidade');
          res.body.should.have.property('vlr_total');
          res.body.should.have.property('loja_venda');
          res.body.should.have.property('usuario_venda');
          res.body.should.have.property('transacao');
          res.body.should.have.property('num_nf')
          res.body.should.have.property('_id').equal(venda.id);
          done();
        });
      });
    });
  });

  describe('POST /vendas', () => {
    it('Deve cadastrar uma nova venda na base', (done) => {
      let venda = new Venda ({

        cd_barras: 789451238,
        cd_estoque: 312312,
        nm_item: 'Sorvete de Baunilha',
        vlr_unitario: 3,
        quantidade: 2,
        vlr_total: 6,
        
        loja_venda: {
          cd_loja: 21390,
          nm_loja: 'Kibom'
        },
        usuario_venda: {
          cd_usuario: 32190,
          nm_usuario: 'Juvenal'
        },
        transacao: {
          tp_pagamento: 'Dinheiro',
          vlr_recebido: 10,
          vlr_troco: 4,
        },
       num_nf: 321900
      }); 
      
       chai.request(server)
        .post('/v1/vendas')
        .send(venda)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body._id.length.should.be.eql(24);
          
          done();
          });
        });
        it('Não deve cadastrar uma venda sem num_nf',(done) => {
          let venda = new Venda({
            
              cd_barras: 789451238,
              cd_estoque: 312312,
              nm_item: 'Sorvete de Baunilha',
              vlr_unitario: 3,
              quantidade: 2,
              vlr_total: 6,
              
              loja_venda: {
                cd_loja: 21390,
                nm_loja: 'Kibom'
              },
              usuario_venda: {
                cd_usuario: 32190,
                nm_usuario: 'Juvenal'
              },
              transacao: {
                tp_pagamento: 'Dinheiro',
                vlr_recebido: 10,
                vlr_troco: 4,
              },
          })
           chai.request(server)
             .post('/v1/vendas')
             .send(venda)
             .end((err,res) => {
               res.should.have.status(500);
               done();
             });
        });
    });
});
