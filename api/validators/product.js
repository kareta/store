const Joi = require('joi');

module.exports = (product) => {
    const schema = {
        name: Joi.string().min(3).required(),
        price: Joi.number().positive().required(),
    };
    return Joi.validate(product, schema);
};