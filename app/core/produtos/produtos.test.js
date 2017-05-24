process.env.NODE_ENV = 'test';

const server = require('../../../server.js');
const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo de Produtos', () => {
  beforeEach((done) => {
    Produto.remove({}, (err) => {
      done();
    });
  });

  describe('GET /produto', function ()  {
    it('deve retornar todos os produtos da base', (done) => {
      chai.request(server)
        .get('/v1/produtos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);

          done();
        });
      });
    });

  describe('POST /produtos', () => {
    it('deve cadastrar um novo produto na base', (done) => {
      let produto = {
        cd_barras: 12345,
        nm_item: 'Lasanha',
        tipo_item: 'Produto',
        unidade: '10',
        preco: 10,
        marca: 'MARCA 1',
        modelo: 'Sadia',
        status: 'Ativo'
      };

      chai.request(server)
        .post('/v1/produtos')
        .send(produto)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body._id.length.should.be.eql(24);

          done();
        });
    });

    it('não deve cadastrar um novo produto na base sem o codigo de barras', (done) => {
      let produto = {
        nm_item: 'Lasanha',
        tipo_item: 'Produto',
        unidade: '10',
        preco: 10,
        marca: 'MARCA 1',
        modelo: 'Sadia',
        status: 'Ativo'
      };

      chai.request(server)
      .post('/v1/produtos')
      .send(produto)
      .end((err, res) => {
        res.should.have.status(500);
        
        done();
      });
    });
  });

  describe('DELETE /produtos/:id', () => {
    it('deve excluir um produto da base a partir do ID', (done) => {
      let produto = new Produto({
        cd_barras: 12345,
        nm_item: 'Lasanha',
        tipo_item: 'Produto',
        unidade: '10',
        preco: 10,
        marca: 'MARCA 1',
        modelo: 'Sadia',
        status: 'Ativo'
      });
      produto.save((err, produto) => {

        chai.request(server)
          .del('/v1/produtos/' + produto._id)
          .end((err, res) => {
            res.should.have.status(204);

            done();
          });
      });
    });
  });

  describe('GET /produtos/:id', () => {
    it('deve retornar um produto da base a partir do ID', (done) => {
      let produto = new Produto({
        cd_barras: 12345,
        nm_item: 'Lasanha',
        tipo_item: 'Produto',
        unidade: '10',
        preco: 10,
        marca: 'MARCA 1',
        modelo: 'Sadia',
        status: 'Ativo'
      });
      produto.save((err, produto) => {

        chai.request(server)
          .get('/v1/produtos/' + produto._id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('cd_barras');
            res.body.should.have.property('nm_item');
            res.body.should.have.property('tipo_item');
            res.body.should.have.property('unidade');
            res.body.should.have.property('preco');
            res.body.should.have.property('marca');
            res.body.should.have.property('modelo');
            res.body.should.have.property('status');
            res.body.should.have.property('_id').to.equal(produto.id);
            done();
          });
        });
      });
    });

  describe('PUT /produtos/:id', () => {
    it('deve atualizar os dados de um produto na base', (done) => {
      let produto = new Produto({
        cd_barras: 12345,
        nm_item: 'Lasanha',
        tipo_item: 'Produto',
        unidade: 10,
        preco: 10,
        marca: 'MARCA 1',
        modelo: 'Sadia',
        status: 'Ativo'
      });
      produto.save((err, produtos) => {

        let produtoAtualizado = Object.assign(produto);
        produtoAtualizado.cd_barras = 54321
        produtoAtualizado.unidade = 100  

        chai.request(server)
          .put('/v1/produtos/' + produto._id)
          .send(produtoAtualizado)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('cd_barras').not.equal(produto.cd_barras);
            res.body.should.have.property('nm_item');
            res.body.should.have.property('tipo_item');
            res.body.should.have.property('unidade').not.equal(produto.unidade);
            res.body.should.have.property('preco');
            res.body.should.have.property('marca');
            res.body.should.have.property('modelo');
            res.body.should.have.property('status');
            res.body.should.have.property('_id').equal(produto.id);
            
            done();
          });
        });
      });
    });
  });