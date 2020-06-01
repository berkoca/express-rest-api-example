const router = require('express').Router();
const controller = require('../../controllers/authentication/authenticationController');
const validator_login = require('../../middlewares/validation/authentication/validator_login');
const validator_register = require('../../middlewares/validation/authentication/validator_register');

router.post('/login', validator_login, controller.login);

router.get('/logout', controller.logout);

router.post('/register', validator_register, controller.register);

module.exports = router;