const router = require('express').Router();
const VerifyToken = require('../../middlewares/VerifyToken');
const isAdmin = require('../../middlewares/isAdmin');
const controller = require('../../controllers/movie/movieController');

// CREATES A NEW MOVIE
router.post('/', VerifyToken, isAdmin, controller.createNewMovie); // AUTHORIZATION NEEDED*

// RETURNS ALL THE MOVIES IN THE DATABASE
router.get('/', VerifyToken, controller.getMovies);

// GETS A SINGLE MOVIE FROM THE DATABASE
router.get('/:id', VerifyToken, controller.getMovie);

// DELETES A MOVIE FROM THE DATABASE
router.delete('/:id', VerifyToken, isAdmin, controller.deleteMovie); // AUTHORIZATION NEEDED*

// UPDATES A SINGLE MOVIE IN THE DATABASE
router.put('/:id', VerifyToken, isAdmin, controller.updateMovie); // AUTHORIZATION NEEDED*

module.exports = router;