const Movie = require('../../models/Movie');
const Joi = require('@hapi/joi');
const moment = require('moment');

exports.createNewMovie = (req, res, next) => {
    Movie.create({
        movieName: req.body.movieName,
        createdBy: req.userId,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss')
    }, function (err, movie) {
        if (err) {
            console.log(err)
            return res.status(500).send({
                success: false,
                message: 'There was a problem adding the movie to the database.'
            });
        }
        res.status(201).send({
            success: true,
            movie
        });
    });
}

exports.getMovies = (req, res, next) => {
    Movie.find({}, function (err, movies) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'There was a problem finding the movies.'
            });
        }
        if (!movies) {
            return res.status(500).send({
                success: false,
                message: 'No movies found.'
            });
        }
        res.status(200).send({
            success: true,
            movies
        });
    });
}

exports.getMovie = (req, res, next) => {
    Movie.findById(req.params.id, function (err, movie) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'There was a problem finding the movie.'
            });
        }
        if (!movie) {
            return res.status(404).send({
                success: false,
                message: 'No movie found.'
            });
        }
        res.status(200).send({
            success: true,
            movie
        });
    });
}

exports.deleteMovie = (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id, function (err, movie) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'There was a problem deleting the movie.'
            });
        }
        if (!movie) {
            return res.status(404).send({
                success: false,
                message: 'No movie found.'
            });
        }
        res.status(201).send({
            success: true,
            message: `Movie was deleted.`
        });
    });
}

exports.updateMovie = (req, res, next) => {
    req.body.updatedAt = moment().format('YYYY-MM-DD hh:mm:ss');
    req.body.updatedBy = req.userId;

    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, movie) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'There was a problem updating the movie.'
            });
        }
        if (!movie) {
            return res.status(404).send({
                success: false,
                message: 'No movie found.'
            });
        }
        res.status(201).send({
            success: true,
            movie
        });
    });
}