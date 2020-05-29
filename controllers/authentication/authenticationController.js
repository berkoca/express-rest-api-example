var User = require('../../models/User'); // User Model
var jwt = require('jsonwebtoken'); // JWT Authentication
var bcrypt = require('bcryptjs'); // Password Encrypting
var configFile = require('../../config'); // Configuration File

exports.login = (req, res, next) => {
    // Check if email or password provided
    if ((!req.body.email) || (!req.body.password)) {
        return res.send({
            success : false,
            message : 'You must provide e-mail and password!' 
        });
    }
    
    User.findOne({ email: req.body.email }, function (err, user) {
        // Check if database returs error
        if (err) return res.status(500).send({
            success: false,
            message: 'There was a problem at login. Try again later.'
        });

        // Check if there is no user
        if (!user) return res.status(404).send({
            success: false,
            message: 'No user found!'
        });

        // Check if the password is valid
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({
            success: false,
            message: 'Wrong password!'
        });

        // If user is found and password is valid,
        // Then create a token
        var token = jwt.sign({ id: user._id, role: user.role }, configFile.token_secret, { expiresIn: configFile.token_expires_in });

        // Return the information including token as JSON
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
    // Check if user already exists on database
    User.exists({ email: req.body.email }, (err, isExist) => {
        // If exists, then respond with error message
        if (isExist) {
            return res.status(400).send({
                success: false,
                message: 'Email is already taken by another user.',
            });
        }
        // If user not exists on database, continue the process

        // Encrypt the user password
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);

        // Create the user on the database
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: 'user'
        }, function (err, user) {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'There was a problem registering the user.'
                });
            }

            // If user is registered without errors, then send response
            res.status(201).send({
                success: true,
                message: 'Successfully registered!'
            });
        });
    });
}