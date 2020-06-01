const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const configFile = require('../../config');
const moment = require('moment');

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send({
            success: false,
            message: 'There was a problem at login. Try again later.'
        });

        if (!user) return res.status(404).send({
            success: false,
            message: 'No user found!'
        });

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({
            success: false,
            message: 'Wrong password!'
        });

        var token = jwt.sign({ id: user._id, role: user.role }, configFile.token_secret, { expiresIn: configFile.token_expires_in });

        res.status(200).send({
            success: true,
            token: token
        });
    });
}

exports.logout = (req, res, next) => {
    res.status(200).send({
        success: true,
        token: null
    });
}

exports.register = (req, res, next) => {
    User.exists({ email: req.body.email }, (err, isExist) => {
        if (isExist) {
            return res.status(400).send({
                success: false,
                message: 'Email is already taken by another user.',
            });
        }

        user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            role: 'user',
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss')
        }

        User.create(user, function (err, user) {
            if (err) {
                console.log(err)
                return res.status(500).send({
                    success: false,
                    message: 'There was a problem registering the user.'
                });
            }

            res.status(201).send({
                success: true,
                message: 'Successfully registered!'
            });
        });
    });
}