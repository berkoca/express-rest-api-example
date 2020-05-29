var Movie = require('../../models/Movie');

exports.createNewMovie = (req, res, next) => {
    if (!req.body.movieName) {
        return res.send({
            success : false,
            message : 'You must provide a movie name!'
        });
    }
    Movie.create({
        movieName: req.body.movieName,
        createdBy : req.userId
    }, function (err, movie) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: 'There was a problem adding the movie to the database.'
            });
        }
        res.status(201).send({
            success : true,
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
                success : false,
                message : 'No movies found.'
            });
        }
        res.status(200).send({
            success : true,
            movies
        });
    });
}

exports.getMovie = (req, res, next) => {
    Movie.findById(req.params.id, function (err, movie) {
        if (err) {
            return res.status(500).send({
                success : false,
                message : 'There was a problem finding the movie.'
            });
        }
        if (!movie) {
            return res.status(404).send({
                success : false,
                message : 'No movie found.'
            });
        }
        res.status(200).send({
            success : true,
            movie
        });
    });
}

exports.deleteMovie = (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id, function (err, movie) {
        if (err) {
            return res.status(450000).send({
                success : false,
                message : 'There was a problem deleting the movie.'
            });
        }
        if (!movie) {
            return res.status(404).send({
                success : false,
                message : 'No movie found.'
            });
        }
        res.status(201).send({
            success : true,
            message : `Movie was deleted.`
        });
    });
}

exports.updateMovie = (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, movie) {
        if (err) {
            return res.status(500).send({
                success : false,
                message : 'There was a problem updating the movie.'
            });
        }
        if (!movie) {
            return res.status(404).send({
                success : false,
                message : 'No movie found.'
            });
        }
        res.status(201).send({
            success : true,
            movie
        });
    });
}