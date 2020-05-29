const router = require('express').Router();
const controller = require('../../controllers/authentication/authenticationController');

router.post('/login', controller.login);

router.get('/logout', controller.logout);

router.post('/register', controller.register);

module.exports = router;