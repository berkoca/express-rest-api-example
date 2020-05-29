var User = require('../../models/User');

exports.createNewUser = (req, res, next) => {
    if ((!req.body.name) || (!req.body.email) || (!req.body.password)) {
        return res.send({
            success : false,
            message : 'You must provide name, email and password!'
        });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role : req.body.role // YOU CAN PROVIDE ROLE BUT IT IS NOT NECESSARY (BY DEFAULT: user)
    }, function (err, user) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'There was a problem adding the user to the database.'
            });
        }
        res.status(201).send({
            success : true,
            user
        });
    });
}

exports.getUsers = (req, res, next) => {
    User.find({}, function (err, users) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'There was a problem getting the users.'
            });
        }
        if (!users) {
            return res.status(404).send({
                success : false,
                message : 'No users found.'
            });
        }
        res.status(200).send({
            success : true,
            users
        });
    });
}

exports.getUser = (req, res, next) => {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send({
                success : false,
                message : 'There was a problem getting the user.'
            });
        }
        if (!user) {
            return res.status(404).send({
                success : false,
                message : 'No user found.'
            });
        }
        res.status(200).send({
            success : true,
            user
        });
    });
}

exports.deleteUser = (req, res, next) => {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send({
                success : false,
                message : 'There was a problem deleting the user.'
            });
        }
        if (!user) {
            return res.status(404).send({
                success : false,
                message : 'No user found.'
            });
        }
        res.status(201).send({
            success : true,
            message : `User was deleted.`
        });
    });
}

exports.updateUser = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
        if (err) {
            return res.status(500).send({
                success : false,
                message : 'There was a problem updating the user.'
            });
        }
        if (!user) {
            return res.status(404).send({
                success : false,
                message : 'No user found.'
            });
        }
        res.status(201).send({
            success : true,
            user
        });
    });
}