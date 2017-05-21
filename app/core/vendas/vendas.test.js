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

  describe('GET /vendas/:id', () => {
    it('Deve retornar uma venda pelo seu id', (done) => {
      let venda = new Venda({
        vendas:[{
          produto    : mongoose.Types.ObjectId(),
          preco      : 3,
          quantidade : 3,
          valor      : 9

        }]
      });
      venda.save((err,venda) => {
        
        chai.request(server)
        .get('/v1/vendas/' + venda._id)
        .end((err,res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('vendas');
          res.body.should.have.property('_id').to.equal(venda.id);
          done();
        });
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
