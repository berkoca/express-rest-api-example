const Joi = require('@hapi/joi');

module.exports = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).trim().required(),
        password: Joi.string().min(8).max(50).trim().required(),
        role: Joi.string().min(4).max(5)
    });

    dataToValidate = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    }

    const { error, value } = schema.validate(dataToValidate);
    
    if (error) {
        return res.status(400).send({
            success : false,
            message : error.details[0].message
        });
    } 
    
    next();
}