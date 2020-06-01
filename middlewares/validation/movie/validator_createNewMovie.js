const Joi = require('@hapi/joi');

module.exports = (req, res, next) => {
    const schema = Joi.object({
        movieName: Joi.string().min(1).max(50).required()
    });

    const { error, value } = schema.validate({ movieName: req.body.movieName });
    
    if (error) {
        return res.status(400).send({
            success : false,
            message : error.details[0].message
        });
    } 
    
    next();
}