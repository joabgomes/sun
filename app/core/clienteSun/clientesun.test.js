process.env.NODE_ENV = 'test';

const server = require('../../../server.js');
const mongoose = require('mongoose');
const ClienteSun = mongoose.model('ClienteSun');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo de ClienteSun', () => {
    beforeEach((done) => {
        ClienteSun.remove({}, (err) => {
            done();
        });
    });

    describe('GET/clientesun', function () {
        it('deve retornar todos os clientes sun da base de dados', (done) => {
            chai.request(server)
                .get('/v1/clientesun')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);

                    done();
                });
        });
    });
    describe('POST/clientesun', () => {
        it('deve cadastrar um novo cliente sun na base de dados', (done) => {
            let clientesun = {
                cd_cliente_sun: 1234,
                email: 'email_clientesun',
                senha: 'senha_clientesun',
                cpf_cnpj: 'cpf_cnpj_clientesun',
                status: 'ATIVO'
            };

            chai.request(server)
                .post('/v1/clientesun')
                .send(clientesun)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body._id.length.should.be.eql(24);


                    done();
                });
        });

        it('não deve cadastrar um novo cliente sun na base de dados sem cd_cliente_sun', (done) => {
            let clientesun = {
                email: 'email_clientesun',
                senha: 'senha_clientesun',
                cpf_cnpj: 'cpf_cnpj_clientesun',
                status: 'ATIVO'
            };
            chai.request(server)
                .post('/v1/clientesun')
                .send(clientesun)
                .end((err, res) => {
                    res.should.have.status(500);

                    done();
                });
        });
    });

    describe('DELETE/ clientesun/:id', () => {
        it('deve excluir um cliente sun da base a partir do ID', (done) => {
            let clientesun = new ClienteSun({
                cd_cliente_sun: 1234,
                email: 'email_clientesun',
                senha: 'senha_clientesun',
                cpf_cnpj: 'cpf_cnpj_clientesun',
                status: 'ATIVO'
            });

            clientesun.save((err, clientesun) => {
                chai.request(server)
                    .del('/v1/clientesun/' + clientesun._id)
                    .end((err, res) => {
                        res.should.have.status(204);

                        done();
                    });
            });
        });
    });


    describe('GET/clientesun/:id', () => {
        it('deve retornar um cliente sun da base a partir do ID', (done) => {
            let clientesun = new ClienteSun({
                cd_cliente_sun: 1234,
                email: 'email_clientesun',
                senha: 'senha_clientesun',
                cpf_cnpj: 'cpf_cnpj_clientesun',
                status: 'ATIVO'
            });
            clientesun.save((err, clientesun) => {
                chai.request(server)
                    .get('/v1/clientesun/' + clientesun._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.be.a('object');
                        res.body.should.have.property('cd_cliente_sun');
                        res.body.should.have.property('email');
                        res.body.should.have.property('senha');
                        res.body.should.have.property('cpf_cnpj');
                        res.body.should.have.property('status');
                        res.body.should.have.property('_id').eql(clientesun.id);

                        done();
                    });
            });
        });
    });

    describe('PUT /clientesun/:id', () => {
        it('deve atualizar o cliente sun na base de dados', (done) => {
            let clientesun = new ClienteSun({
                cd_cliente_sun: 1234,
                email: 'email_clientesun',
                senha: 'senha_clientesun',
                cpf_cnpj: 'cpf_cnpj_clientesun',
                status: 'ATIVO'
            });
            clientesun.save((err, clientesun) => {

                let clientesunAtualizado = Object.assign(clientesun);
                clientesunAtualizado.cd_cliente_sun = 4321;
                clientesunAtualizado.email = 'teste';

                chai.request(server)
                    .put('/v1/clientesun/' + clientesun._id)
                    .send(clientesunAtualizado)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('cd_cliente_sun').not.eql(clientesun.cd_cliente_sun);
                        res.body.should.have.property('email').not.eql(clientesun.email);
                        res.body.should.have.property('senha');
                        res.body.should.have.property('cpf_cnpj');
                        res.body.should.have.property('status');
                        res.body.should.have.property('_id').eql(clientesun.id);

                        done();
                    });
            });
        });
    });
});


