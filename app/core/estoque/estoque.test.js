process.env.NODE_ENV = 'test';

const server = require('../../../server.js');
const mongoose = require('mongoose');
const Estoque = mongoose.model('Estoque');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo de Estoque', () => {
    beforeEach((done) => {
        Estoque.remove({}, (err) => {
            done();
        });
    });

    describe('GET /estoque', function () {
        it('deve retornar todos os estoques da base de dados', (done) => {
            chai.request(server)
                .get('/v1/estoque')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);

                    done();
                });
        });
    });
    describe('POST /estoque', () => {
        it('deve cadastrar um novo estoque na base de dados', (done) => {
            let estoque = new Estoque ({
                cd_estoque: 1234,
                cd_loja: 1234,
                cd_produto: 1234,
                cd_barras: 1234,
                qtd_estoque: 1234,
                cd_compra: 1234,
                dt_validade: new Date()
            });

            chai.request(server)
                .post('/v1/estoque')
                .send(estoque)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body._id.length.should.be.eql(24);


                    done();
                });
        });

        it('não deve cadastrar um novo estoque na base de dados sem cd_estoque', (done) => {
           let estoque = new Estoque ({
                cd_loja: 1234,
                cd_produto: 1234,
                cd_barras: 1234,
                qtd_estoque: 1234,
                cd_compra: 1234,
                dt_validade: new Date()
            });

            chai.request(server)
                .post('/v1/estoque')
                .send(estoque)
                .end((err, res) => {
                    res.should.have.status(500);

                    done();
                });
        });
    });

    describe('DELETE/ estoque/:id', () => {
        it('deve excluir um estoque da base a partir do ID', (done) => {
            let estoque = new Estoque ({
                cd_estoque: 1234,
                cd_loja: 1234,
                cd_produto: 1234,
                cd_barras: 1234,
                qtd_estoque: 1234,
                cd_compra: 1234,
                dt_validade: new Date()
            });

            estoque.save((err, estoque) => {
                chai.request(server)
                    .del('/v1/estoque/' + estoque._id)
                    .end((err, res) => {
                        res.should.have.status(204);

                        done();
                    });
            });
        });
    });


    describe('GET/estoque/:id', () => {
        it('deve retornar um estoque da base a partir do ID', (done) => {
            let estoque = new Estoque({
                cd_estoque: 1234,
                cd_loja: 1234,
                cd_produto: 1234,
                cd_barras: 1234,
                qtd_estoque: 1234,
                cd_compra: 1234,
                dt_validade: new Date()
           });
            estoque.save((err, estoque) => {
                chai.request(server)
                    .get('/v1/estoque/' + estoque._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.be.a('object');
                        res.body.should.have.property('cd_estoque')
                        res.body.should.have.property('cd_compra')
                        res.body.should.have.property('cd_loja');
                        res.body.should.have.property('cd_produto');
                        res.body.should.have.property('cd_barras');
                        res.body.should.have.property('qtd_estoque');
                        res.body.should.have.property('dt_validade');
                        res.body.should.have.property('_id').eql(estoque.id);

                        done();
                    });
            });
        });
    });

    describe('PUT /estoque/:id', () => {
        it('deve atualizar o estoque na base de dados', (done) => {
            let estoque = new Estoque({
                cd_estoque: 1234,
                cd_loja: 1234,
                cd_produto: 1234,
                cd_barras: 1234,
                qtd_estoque: 1234,
                cd_compra: 1234,
                dt_validade: new Date()
            });
            estoque.save((err, estoque) => {

                let estoqueAtualizado = Object.assign(estoque);
                estoqueAtualizado.cd_estoque = 4321;
                estoqueAtualizado.cd_compra = 3567;

                chai.request(server)
                    .put('/v1/estoque/' + estoque._id)
                    .send(estoqueAtualizado)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('cd_estoque').not.eql(estoque.cd_estoque);
                        res.body.should.have.property('cd_compra').not.eql(estoque.cd_compra);
                        res.body.should.have.property('cd_loja');
                        res.body.should.have.property('cd_produto');
                        res.body.should.have.property('cd_barras');
                        res.body.should.have.property('qtd_estoque');
                        res.body.should.have.property('dt_validade');
                        res.body.should.have.property('_id').eql(estoque.id);

                        done();
                    });
            });
        });
    });
});


