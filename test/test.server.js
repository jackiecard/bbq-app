process.env.NODE_END = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import mongoose from 'mongoose';
import UserModel from '../models/userModel';
let should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {

  UserModel.collection.drop();

  beforeEach(function(done){
    var newUser = new UserModel({
      email: 'j@g.com',
      password: 'pass'
    });
    newUser.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    UserModel.collection.drop();
    done();
  });

  describe('User API requests', function() {
    it('should list ALL Users on /users GET', done => {
            chai.request(server)
              .get('/api/users')
              .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('array');
                  done();
              })
        });
    it('should list a SINGLE user on /user/<id> GET',
    // done => {
    //         chai.request(server)
    //           .get('/api/user' + )
    //           .send({email: 'j@g.com', password: 'pass'})
    //           .end((err, res) => {
    //               res.should.have.status(200);
    //               res.should.be.json;
    //               res.body.should.be.a('object');
    //               res.body.should.have.property('SUCCESS');
    //               res.body.SUCCESS.should.be.a('object');
    //               res.body.SUCCESS.should.have.property('email');
    //               res.body.SUCCESS.should.have.property('password');
    //               res.body.SUCCESS.email.should.equal('j@g.com');
    //               res.body.SUCCESS.password.should.equal('pass');
    //               done();
    //           })
    //     }
    );
    it('should add a SINGLE user on /users POST', done => {
            chai.request(server)
              .post('/api/users')
              .send({email: 'j@g.com', password: 'pass'})
              .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('SUCCESS');
                  res.body.SUCCESS.should.be.a('object');
                  res.body.SUCCESS.should.have.property('email');
                  res.body.SUCCESS.should.have.property('password');
                  res.body.SUCCESS.email.should.equal('j@g.com');
                  res.body.SUCCESS.password.should.equal('pass');
                  done();
              })
        });
    it('should update a SINGLE user on /user/<id> PUT');
    it('should delete a SINGLE user on /blob/<id> DELETE');
  });

});
