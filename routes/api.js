import express from 'express'
import UserModel from '../models/userModel'
import CompanyModel from '../models/companyModel'
import ItemPurchaseModel from '../models/itemPurchaseModel'
import PurchaseModel from '../models/purchaseModel'

let api = express.Router()

/*
 *             USER
 *
 */
api.route('/users')
    .get((req, res) => {
        UserModel.find((err, users) => {
            if(err){
                return res.send(err)
            }
            res.json(users)
        })
    })
    .post((req, res) => {
        var user =  new UserModel()
        user.email = req.body.email
        user.password = req.body.password

        user.save((err) => {
            if(err){
                return res.send(err)
            }

            res.json({ 'SUCCESS': user })
        })
    })


api.route('/user/:id')
    .get((req, res) => {
        UserModel.findById(req.params.id, (err, user) => {
            if(err){
                return res.send(err)
            }

            res.json({ 'SUCCESS': user })
        })
    })
    .put((req, res) => {
        UserModel.findById(req.params.id, (e, user) => {
            if(e){
                return res.send(e)
            }
            if(!user){
                return res.sendStatus(404)
            }

            user.email= req.body.email || user.email
            user.password= req.body.password || user.password

            user.save((err, updatedUser) => {
                if(err){
                    return res.sendStatus(500, err)
                }
                res.json({ 'UPDATED': updatedUser })
            })
        })
    })
    .delete((req, res) => {
        UserModel.findByIdAndRemove(req.params.id, function (err, user) {
            res.send({ 'DELETED': user });
        })
    })



/*
 *             COMPANY
 *
 */
 api.route('/companies')
     .get((req, res) => {
         CompanyModel.find((err, companies) => {
             if(err){
                 return res.send(err)
             }
             res.json(companies)
         })
     })
     .post((req, res) => {
         var company =  new CompanyModel()
         company.cnpj = req.body.cnpj
         company.name = req.body.name

         company.save((err) => {
             if(err){
                 return res.send(err)
             }

             res.json({ 'SUCCESS': company })
         })
     })

api.route('/company/:cnpj')
    .get((req, res) => {
        CompanyModel.findOne({ cnpj: req.params.cnpj }, (err, company) => {
            if(err){
                return res.send(err)
            }

            res.json({ 'SUCCESS': company })
        })
    })

/*
 *             ITEM PURCHASE
 *
 */
 api.route('/items')
     .get((req, res) => {
        //  console.log('-------- req body api --------', req.body)
         ItemPurchaseModel.find((err, items) => {
             if(err){
                 return res.send(err)
             }
             res.json(items)
         })
     })
     .post((req, res) => {
         var item =  new ItemPurchaseModel()
         item.quantity = req.body.quantity
         item.name = req.body.name

         item.save((err) => {
             if(err){
                 return res.send(err)
             }

             res.json({ 'SUCCESS': item })
         })
     })

api.route('/item/:id')
 .get((req, res) => {
     ItemPurchaseModel.findById(req.params.id, (err, item) => {
         if(err){
             return res.send(err)
         }

         res.json({ 'SUCCESS': item })
     })
 })

 /*
  *             PURCHASE
  *
  */
  api.route('/purchases')
      .get((req, res) => {
          PurchaseModel.find((err, purchase) => {
              if(err){
                  return res.send(err)
              }
              res.json(purchase)
          })
      })

export default api;
