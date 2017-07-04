import express from 'express';

import UserModel from '../models/userModel';

let api = express.Router();

api.route('/users')
    .get((req, res) => {
        // UserModel.find((err, users) => {
        //     if(err)
        //         res.send(err)
        //
        //     res.json(users)
        //
        // })
        res.json("ok")
    })
    .post((req, res) => {
        var user =  new UserModel();
        user.email = req.body.email;
        user.password = req.body.password;

        user.save((err) => {
            if(err)
                res.send(err);

            res.json({ 'SUCCESS': user })
        })
    })


// api.post('/user', (req, res) => {
//
//
//     res.json({message: 'ok'})
//
//     // var user =  new UserModel();
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
