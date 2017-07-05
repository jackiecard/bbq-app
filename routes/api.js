import express from 'express'
import UserModel from '../models/userModel'

let api = express.Router()

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
        UserModel.findById(req.body.id, (e, user) => {
            if(e){
                return res.send(e)
            }
            if(!user){
                return res.sendStatus(404)
            }

            user.update({_id : req.params }, { email: req.body.email, password: req.body.password }, err => {
                if(err){
                    return res.sendStatus(500, err)
                }
                res.json({ 'UPDATED': user })
            })
        })
    })


// api.post('/user', (req, res) => {
//
//
//     res.json({message: 'ok'})
//
//     // var user =  new UserModel()
//     // user.email = req.body.email;
//     // user.password = req.body.password;
//     //
//     // user.save((err) => {
//     //     if(err)
//     //         res.send(err);
//     //
//     //     res.json({message: 'ok'})
//     // })
// });

// api.get('/users', (req, res) => {
//
//     // UserModel.find((err, users) => {
//     //     if(err)
//     //         res.send(err)
//     //
//     //     res.json(users)
//     //
//     // })
//     res.json("ok")
// });
export default api;
