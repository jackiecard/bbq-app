var assert = require('assert');
var testeReducers = require('../views/src/reducers/testeReducers');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../routes')

chai.use(chaiHttp);
describe('Teste', function() {
    // entender o mocha
    it('it should GET all the test', (done) => {
        chai.request(server)
            .get('/teste')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
});
