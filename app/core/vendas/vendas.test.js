process.env.NODE_ENV = 'test';

const server = require ('../../../server.js');
const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Módulo Vendas', () => {
    beforeEach((done) =>{
        Venda.remove({}, (err) => {
            done();

        });

    });

    describe('POST /vendas', function() {
        it('Deve cadastrar uma nova venda na base de dados',(done) =>{

            let venda = {
                vendas:[
                    {	
                        "valor" : 100,
                        "quantidade" : "10",
                        "preco" : "10",
                        "produto" : "Produtos"
                    },
                    {
                        "valor" : 400,
                        "quantidade" : "20",
                        "preco" : "20",
                        "produto" : "Servicos"

                    }
                  ]
            };

            chai.request(server)
                .post('/v1/vendas')
                .send(venda)
                .end((err,res)=>{

                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body._id.length.should.be.eql(24);

                    done();

            });
        });
    });
});