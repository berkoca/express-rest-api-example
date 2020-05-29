const router = require('express').Router();
const VerifyToken = require('../../middlewares/VerifyToken');
const isAdmin = require('../../middlewares/isAdmin');
const controller = require('../../controllers/user/userController');

// CREATES A NEW USER
router.post('/', VerifyToken, isAdmin, controller.createNewUser); // AUTHORIZATION NEEDED*

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', VerifyToken, isAdmin, controller.getUsers); // AUTHORIZATION NEEDED*

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', VerifyToken, isAdmin, controller.getUser);

// DELETES A USER FROM THE DATABASE
router.delete('/:id', VerifyToken, isAdmin, controller.deleteUser); // AUTHORIZATION NEEDED*

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', VerifyToken, isAdmin, controller.updateUser); // AUTHORIZATION NEEDED*

module.exports = router;