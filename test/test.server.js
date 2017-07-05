process.env.NODE_END = 'test'

import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'
import mongoose from 'mongoose'
import UserModel from '../models/userModel'
let should = chai.should()

chai.use(chaiHttp)

describe('Users', function() {

    // UserModel.collection.drop()

    beforeEach(function(done){
        var newUser = new UserModel({
            email: 'j@g.com',
            password: 'pass'
        })
        newUser.save(function(err) {
            done()
        })
    })
    afterEach(function(done){
        // UserModel.collection.drop()
        done()
    })

  describe('User API requests', function() {
    it('should list ALL Users on /users GET', done => {
            chai.request(server)
              .get('/api/users')
              .end((err, res) => {
                  res.should.have.status(200)
                  res.should.be.json
                  res.body.should.be.a('array')
                  done()
              })
        })
    it('should list a SINGLE user on /user/<id> GET', done => {
        chai.request(server)
            .get('/api/users')
            .end(function(err, response){
              let aUser = response.body[0]
              chai.request(server)
                .get('/api/user/' + aUser._id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.json
                    res.body.SUCCESS.should.be.a('object')
                    res.body.SUCCESS.should.have.property('_id')
                    res.body.SUCCESS._id.should.equal(aUser._id)
                    done()
            })
        })
    })
    it('should add a SINGLE user on /users POST', done => {
            chai.request(server)
              .post('/api/users')
              .send({email: 'jackie@gmail.com', password: '123456'})
              .end((err, res) => {
                  res.should.have.status(200)
                  res.should.be.json
                  res.body.should.be.a('object')
                  res.body.should.have.property('SUCCESS')
                  res.body.SUCCESS.should.be.a('object')
                  res.body.SUCCESS.should.have.property('email')
                  res.body.SUCCESS.should.have.property('password')
                  res.body.SUCCESS.email.should.equal('jackie@gmail.com')
                  res.body.SUCCESS.password.should.equal('123456')
                  done()
              })
        })
    it('should update a SINGLE user on /user/<id> PUT', done => {
        chai.request(server)
            .get('/api/users')
            .end(function(err, response){
              let aUser = response.body[0]
              aUser.email = 'superemail' + Math.random() + '@g.com'

              chai.request(server)
                .put('/api/user/' + aUser._id)
                .send(aUser)
                .end(function(e, res){
                  res.should.have.status(200)
                  res.should.be.json
                  res.body.should.be.a('object')
                  res.body.should.have.property('UPDATED')
                  res.body.UPDATED.should.be.a('object')
                  res.body.UPDATED.should.have.property('email')
                  res.body.UPDATED.email.should.equal(aUser.email)
                  done()
              })
          })
      })


        //   chai.request(server)
        //     .put('/api/user/' + id)
        //     .send({'email': 'super@g.com', password: '123'})
        //     .end(function(err, res){
        //         console.log(res.body)
        //       res.should.have.status(200)
        //       res.should.be.json
        //       res.body.should.be.a('object')
        //       res.body.should.have.property('UPDATED')
        //       res.body.UPDATED.should.be.a('object')
        //       res.body.UPDATED.should.have.property('email')
        //       res.body.UPDATED.email.should.equal('super@g.com')
        //       res.body.UPDATED.should.have.property('password')
        //       res.body.UPDATED.password.should.equal('123')
        //       done()
        //   })
        // }
    it('should delete a SINGLE user on /blob/<id> DELETE')
  })

})
