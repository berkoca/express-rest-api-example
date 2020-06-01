const router = require('express').Router();
const isTokenValid = require('../../middlewares/isTokenValid');
const isAdmin = require('../../middlewares/isAdmin');
const controller = require('../../controllers/movie/movieController');
const validator_createNewMovie = require('../../middlewares/validation/movie/validator_createNewMovie');
const validator_updateMovie = require('../../middlewares/validation/movie/validator_updateMovie');

// CREATES A NEW MOVIE
router.post('/', isTokenValid, isAdmin, validator_createNewMovie, controller.createNewMovie); // AUTHORIZATION NEEDED* // VALIDATION*

// RETURNS ALL THE MOVIES IN THE DATABASE
router.get('/', isTokenValid, controller.getMovies);

// GETS A SINGLE MOVIE FROM THE DATABASE
router.get('/:id', isTokenValid, controller.getMovie);

// DELETES A MOVIE FROM THE DATABASE
router.delete('/:id', isTokenValid, isAdmin, controller.deleteMovie); // AUTHORIZATION NEEDED*

// UPDATES A SINGLE MOVIE IN THE DATABASE
router.put('/:id', isTokenValid, isAdmin, validator_updateMovie, controller.updateMovie); // AUTHORIZATION NEEDED*

module.exports = router;