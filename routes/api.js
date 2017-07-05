import express from 'express'
import UserModel from '../models/userModel'

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

export default api;
