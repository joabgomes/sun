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
      let compra = {
        nota_fiscal: 12345,
        codigo: 'COMPRA123',
        produto: mongoose.Types.ObjectId(),
        quantidade: 1,
        valor_unitario: 123.45,
        data_fabricacao: '14/05/2017',
        validade: '14/05/2017'
      };

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

    it('não deve cadastrar uma nova compra na base sem nota fiscal', (done) => {
      let compra = {
        codigo: 'COMPRA123',
        produto: mongoose.Types.ObjectId(),
        quantidade: 1,
        valor_unitario: 123.45,
        data_fabricacao: '14/05/2017',
        validade: '14/05/2017'
      };

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
        nota_fiscal: 12345,
        codigo: 'COMPRA123',
        produto: mongoose.Types.ObjectId(),
        quantidade: 1,
        valor_unitario: 123.45,
        valor_total: 123.45,
        data_fabricacao: '14/05/2017',
        validade: '14/05/2017'
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
        nota_fiscal: 12345,
        codigo: 'COMPRA123',
        produto: mongoose.Types.ObjectId(),
        quantidade: 1,
        valor_unitario: 123.45,
        valor_total: 123.45,
        data_fabricacao: '14/05/2017',
        validade: '14/05/2017'
      });

      compra.save((err, compra) => {
        chai.request(server)
          .get('/v1/compras/' + compra._id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('nota_fiscal');
            res.body.should.have.property('codigo');
            res.body.should.have.property('produto');
            res.body.should.have.property('quantidade');
            res.body.should.have.property('valor_unitario');
            res.body.should.have.property('valor_total');
            res.body.should.have.property('data_fabricacao');
            res.body.should.have.property('validade');
            res.body.should.have.property('_id').eql(compra._id);

            done();
          });
      });
    });
  });

  describe('PUT /compras/:id', () => {
    it('deve atualizar os dados de uma compra na base', (done) => {
      let compra = new Compra({
        nota_fiscal: 12345,
        codigo: 'COMPRA123',
        produto: mongoose.Types.ObjectId(),
        quantidade: 1,
        valor_unitario: 123.45,
        valor_total: 123.45,
        data_fabricacao: '14/05/2017',
        validade: '14/05/2017'
      });

      compra.save((err, compra) => {
        let compraAtualizada = Object.assign({}, compra);
        compraAtualizada.nota_fiscal = 67890;
        compraAtualizada.quantidade = 2;

        chai.request(server)
          .put('/v1/compras/' + compra._id)
          .send(compraAtualizada)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('nota_fiscal').not.eql(compra.nota_fiscal);
            res.body.should.have.property('codigo');
            res.body.should.have.property('produto');
            res.body.should.have.property('quantidade').not.eql(compra.quantidade);
            res.body.should.have.property('valor_unitario');
            res.body.should.have.property('valor_total');
            res.body.should.have.property('data_fabricacao');
            res.body.should.have.property('validade');
            res.body.should.have.property('_id').eql(compra._id);

            done();
          });
      });
    });
  });
});