process.env.NODE_END = 'test'

import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'
import mongoose from 'mongoose'
import UserModel from '../models/userModel'
import CompanyModel from '../models/companyModel'
import ItemPurchaseModel from '../models/itemPurchaseModel'
import PurchaseModel from '../models/purchaseModel'
let should = chai.should()

chai.use(chaiHttp)

/*
 *             USER
 *
 */
describe('Users', function() {
    UserModel.collection.drop()

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
        UserModel.collection.drop()
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
            .end(function(error, response){
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
            .end(function(error, response){
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

    it('should delete a SINGLE user on /blob/<id> DELETE', done => {
        chai.request(server)
            .get('/api/users')
            .end(function(err, response){
              let aUser = response.body[0]

              chai.request(server)
                .delete('/api/user/' + aUser._id)
                .end(function(e, res){
                  res.should.have.status(200)
                  res.should.be.json
                  res.body.should.have.property('DELETED')
                  res.body.DELETED.should.be.a('object')
                  done()
              })
          })
      })

  })

  /*
   *             COMPANY
   *
   */
   describe('Company', function() {
       CompanyModel.collection.drop()

       beforeEach(function(done){
           var newUser = new CompanyModel({
               cnpj: '123456',
               name: 'Jackie S/A'
           })
           newUser.save(function(err) {
               done()
           })
       })
       afterEach(function(done){
           CompanyModel.collection.drop()
           done()
       })

     describe('Company API requests', function() {
       it('should list ALL Companies on /companies GET', done => {
           chai.request(server)
             .get('/api/companies')
             .end((err, res) => {
                 res.should.have.status(200)
                 res.should.be.json
                 res.body.should.be.a('array')
                 done()
             })
       })
       it('should list a SINGLE Company on /company/<id> GET', done => {
           chai.request(server)
               .get('/api/companies')
               .end(function(error, response){
                 let aCompany = response.body[0]
                 chai.request(server)
                   .get('/api/company/' + aCompany.cnpj)
                   .end((err, res) => {
                       res.should.have.status(200)
                       res.should.be.json
                       res.body.SUCCESS.should.be.a('object')
                       res.body.SUCCESS.should.have.property('cnpj')
                       res.body.SUCCESS.cnpj.should.equal(aCompany.cnpj)
                       done()
               })
           })
       })
       it('should add a SINGLE Company on /companies POST', done => {
           chai.request(server)
            .post("/api/companies")
            .send({ cnpj: '098768', name: 'Coisinha LTDA' })
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('object')
                res.body.should.have.property('SUCCESS')
                res.body.SUCCESS.should.be.a('object')
                res.body.SUCCESS.should.have.property('cnpj')
                res.body.SUCCESS.should.have.property('name')
                res.body.SUCCESS.cnpj.should.equal('098768')
                res.body.SUCCESS.name.should.equal('Coisinha LTDA')
                done()
            })
       })
      })
     })


/*
*             ITEM PURCHASE
*
*/
describe('Item Purchase', function() {
    ItemPurchaseModel.collection.drop()

    beforeEach(function(done){
        var item = new ItemPurchaseModel({
            name: 'Cerveja',
            quantity: '8001'
        })
        item.save(function(err) {
            done()
        })
    })
    afterEach(function(done){
        ItemPurchaseModel.collection.drop()
        done()
    })

    describe('Item Purchase API requests', function() {
      it('should list ALL Item Purchase on /items GET', done => {
        chai.request(server)
          .get('/api/items')
          .end((err, res) => {
            //   console.log('--------- get all items ----------', res.body)
              res.should.have.status(200)
              res.should.be.json
              res.body.should.be.a('array')
              res.body.should.not.be.empty
              done()
          })
       })
       it('should list a SINGLE Item Purchase on /item/<id> GET', done => {
           chai.request(server)
               .get('/api/items')
               .end(function(error, response){
                 let aItem = response.body[0]
                 chai.request(server)
                   .get('/api/item/' + aItem._id)
                   .end((err, res) => {
                       res.should.have.status(200)
                       res.should.be.json
                       res.body.SUCCESS.should.be.a('object')
                       res.body.SUCCESS.should.have.property('_id')
                       res.body.SUCCESS._id.should.equal(aItem._id)
                       done()
               })
           })
       })
       it('should add a SINGLE Item on /items POST', done => {
           chai.request(server)
            .post("/api/items")
            .send({ name: 'maminha', quantity: '70' })
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('object')
                res.body.should.have.property('SUCCESS')
                res.body.SUCCESS.should.be.a('object')
                res.body.SUCCESS.should.have.property('quantity')
                res.body.SUCCESS.should.have.property('name')
                res.body.SUCCESS.quantity.should.equal('70')
                res.body.SUCCESS.name.should.equal('maminha')
                done()
            })
       })
     })
  })

  /*
  *             PURCHASE
  *
  */
  describe('Purchase', function() {
      PurchaseModel.collection.drop()

      beforeEach(function(done){
          var newUser = new UserModel({
              email: 'purchase@g.com',
              password: 'pass123'
          })
          var items = [];
          var item1 = new ItemPurchaseModel({
              nome: 'Chocolate',
              quantity: '10'
          })
          var item2 = new ItemPurchaseModel({
              nome: 'Pão',
              quantity: '225'
          })
          items.push(item1)
          items.push(item2)

          var newPurchase = new PurchaseModel({
              userId: newUser._id,
              items: items
          })
          newPurchase.save(function(err) {
              done()
          })
      })
      afterEach(function(done){
          PurchaseModel.collection.drop()
          done()
      })

      describe('Purchase API requests', function() {
        it('should list ALL Purchase on /purchases GET', done => {
          chai.request(server)
            .get('/api/purchases')
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('array')
                res.body[0].should.be.a('object')
                res.body[0].should.have.property('userId')

                // check if user exists
                chai.request(server)
                  .get('/api/user/' + res.body[0].userId)
                  .end((e, r) => {
                      r.body.should.have.status(200)
                      r.should.be.json
                      r.body.SUCCESS.should.be.a('object')
                      r.body.SUCCESS.should.have.property('_id')
                      r.body.SUCCESS._id.should.equal(res.body[0].userId)
                  })

                res.body[0].should.have.property('items')

                // TODO: check if a item exists
                // chai.request(server)
                //   .get('/api/item/' + res.body[0].items[0])
                //   .end((e, r) => {
                //       console.log('------------', r.body, res.body[0].items[0])
                //       r.body.should.have.status(200)
                //       r.should.be.json
                //       r.body.SUCCESS.should.be.a('object')
                //       r.body.SUCCESS.should.have.property('_id')
                //       r.body.SUCCESS._id.should.equal(res.body[0].items[0])
                //   })
                done()
            })
         })

       })
    })


})
