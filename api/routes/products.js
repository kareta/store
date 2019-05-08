const Joi = require('joi');
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (request, response) => {
    const products = await db.products.findAll();
    response.send(products);
});

router.get('/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const product = await db.products.findByPk(id);

    if (!product) {
        response.status(404);
        return response.send('The product with the id does not exist');
    }

    response.send(product);
});

router.post('/', async (request, response) => {
    const { error } = validateProduct(request.body);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }

    const product = {
        id: products.length + 1,
        name: request.body.name,
        price: request.body.price,
    };
    await db.products.create(product);
    response.send(product);
});

router.put('/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const product = await db.products.findByPk(id);

    if (!product) {
        response.status(404);
        return response.send('The product with the id does not exist');
    }

    const { error } = validateProduct(request.body);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }

    await db.products.update({
        name: request.body.name,
        price: request.body.price,
    }, {
        where: { id },
    });

    response.send(product);
});

router.delete('/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const product = await db.products.findByPk(id);

    if (!product) {
        response.status(404);
        return response.send('The product with the id does not exist');
    }

    await db.products.destroy({ where: { id } });

    response.send(product);
});

function validateProduct(product) {
    const schema = {
        name: Joi.string().min(3).required(),
        price: Joi.number().positive().required(),
    };
    return Joi.validate(product, schema);
}

module.exports = router;