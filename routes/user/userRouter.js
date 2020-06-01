const router = require('express').Router();
const isTokenValid = require('../../middlewares/isTokenValid');
const isAdmin = require('../../middlewares/isAdmin');
const validator_createNewUser = require('../../middlewares/validation/user/validator_createNewUser');
const validator_updateUser = require('../../middlewares/validation/user/validator_updateUser');
const controller = require('../../controllers/user/userController');

// CREATES A NEW USER
router.post('/', isTokenValid, isAdmin, validator_createNewUser, controller.createNewUser); // AUTHORIZATION NEEDED*

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', isTokenValid, isAdmin, controller.getUsers); // AUTHORIZATION NEEDED*

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', isTokenValid, controller.getUser);

// DELETES A USER FROM THE DATABASE
router.delete('/:id', isTokenValid, isAdmin, controller.deleteUser); // AUTHORIZATION NEEDED*

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', isTokenValid, isAdmin, validator_updateUser, controller.updateUser); // AUTHORIZATION NEEDED*

module.exports = router;