import express from 'express'
import UserModel from '../models/userModel'
import CompanyModel from '../models/companyModel'
import ItemPurchaseModel from '../models/itemPurchaseModel'
import PurchaseModel from '../models/purchaseModel'

let api = express.Router()


/*
 *             LOGIN
 *
 */
api.route('/login')
    .post((req, res) => {
        UserModel.findOne({ email: req.body.email }, function (err, user) {
            if (!user){
                res.statusCode = 401
                return res.send('Email or password are not correct')
            }
            if (err){
                return res.send(err)
            }
            return res.json({ 'AUTHENTICATED': { email: user.email, _id: user._id } })
        })
    })

api.route('/login/:id')
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
                res.json({ 'AUTHENTICATED': { email: updatedUser.email, _id: updatedUser._id } })
            })
        })
    })


/*
 *             SIGNUP
 *
 */
api.route('/signup')
    .post((req, res) => {
        if(req.body.password !== req.body.confirm){
            res.statusCode = 422
            return res.send('The password that your provided does not match. Please, check the fields again.')
        }

        var user =  new UserModel()
        user.email = req.body.email
        user.password = req.body.password

        user.save((err) => {
            if(err){
                return res.send(err)
            }
            res.json({ 'SUCCESS': { user: user.email, id: user._id } })
        })
    })


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
             res.json(item)
         })
     })

api.route('/item/:id')
 .get((req, res) => {
     ItemPurchaseModel.findById(req.params.id, (err, item) => {
         if(err){
             return res.send(err)
         }

         res.json(item)
     })
 })
 .delete((req, res) => {
     ItemPurchaseModel.findByIdAndRemove(req.params.id, function (err, item) {
         res.send({ item });
     })
 })

 /*
  *             PURCHASE
  *
  */
  api.route('/purchased')
      .post((req, res) => {
          var purchase =  new PurchaseModel()

          purchase.userId = req.body.userId

          req.body.items.map(item => {
              var newItem =  new ItemPurchaseModel();

              newItem.quantity = item.quantity
              newItem.name = item.name

              newItem.save((err) => {
                  if(err){
                      return res.send(err)
                  }
                  purchase.items.push(newItem)
              })
          })

          purchase.save((err) => {
              if(err){
                  return res.send(err)
              }

              res.json({ 'SUCCESS': purchase })
          })
      })
  api.route('/purchases')
      .get((req, res) => {
          PurchaseModel.find((err, purchase) => {
              if(err){
                  return res.send(err)
              }
              res.json(purchase)
          })
      })
      .post((req, res) => {
          var purchase =  new PurchaseModel()
          purchase.items = req.body.items
          purchase.userId = req.body.userId

          purchase.save((err) => {
              if(err){
                  return res.send(err)
              }

              res.json({ 'SUCCESS': purchase })
          })
      })

  api.route('/purchase/:id')
       .get((req, res) => {
           PurchaseModel.findById(req.params.id, (err, purchase) => {
               if(err){
                   return res.send(err)
               }

               res.json({ 'SUCCESS': purchase })
           })
       })

       .delete((req, res) => {
           PurchaseModel.findByIdAndRemove(req.params.id, function (err, purchase) {
               res.send({ 'DELETED': purchase });
           })
       })

export default api;
