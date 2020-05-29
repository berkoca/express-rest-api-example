const router = require('express').Router();

// ROUTES
const authenticationRoutes = require('./authentication/authenticationRouter');
const movieRoutes = require('./movie/movieRouter');
const userRoutes = require('./user/userRouter');

router.use('/auth', authenticationRoutes);
router.use('/movies', movieRoutes);
router.use('/users', userRoutes);

router.get('/', (req, res, next) => {
    res.status(200).send({
        success: true,
        message: 'API works.'
    });
});

module.exports = router;