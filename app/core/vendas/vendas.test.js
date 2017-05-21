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

  describe('POST /vendas', () => {
    it('Deve cadastrar uma nova venda na base', (done) => {
      let venda = [
          { 
            produto    : mongoose.Types.ObjectId(),
            preco      : 10,
            quantidade : 10,
            valor      : 100,        
          }
        ]
      
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
        it('Não deve cadastrar uma venda sem produto',(done) => {
          let venda = [
              { 
                preco      : 10,
                quantidade : 10,
                valor      : 10      
              }
           ]
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
