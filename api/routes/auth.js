const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const passport1 = require('../config/passport');
const User = require('../models').User;
const Role = require('../models').Role;

const requireToken = passport1.authenticateJWT;
const requireCredentials = passport1.authenticateCredentials;

router.post('/signup', function (req, res) {
    if (!req.body.email || !req.body.password || !req.body.fullname) {
        res.status(400).send({
            msg: 'Please pass email, password, phone and fullname.'
        })
    } else {
        Role.findOne({
            where: {
                role_name: 'user'
            }
        }).then((role) => {
            console.log(role.id);
            User
            .create({
                email: req.body.email,
                password: req.body.password,
                fullname: req.body.fullname,
                phone: req.body.phone,
                role_id: role.id
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => {
                res.status(400).send(error);
            });
        }).catch((error) => {
            res.status(400).send(error);
        });
    }
});

router.post('/signin', requireCredentials, function (req, res) {

    User
        .findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user) => {
            if (!user) {
                return res.status(401).send({
                    message: 'Authentication failed. Email address not found.',
                });
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    var token = jwt.sign(JSON.parse(JSON.stringify(user)), '123#@$!%*878977', {
                        expiresIn: 86400 * 30
                    });
                    jwt.verify(token, '123#@$!%*878977', function (err, data) {
                        console.log(err, data);
                    })
                    res.json({
                        success: true,
                        token: 'Bearer ' + token,
                        user: user
                    });
                } else {
                    res.status(401).send({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });
                }
            })
        })
        .catch((error) => res.status(400).send(error));
});

module.exports = router;