const Joi = require('joi');
const express = require('express');
const router = express.Router();

const products = [
    {
        id: 1,
        name: 'Boots',
        price: 1099,
    },
    {
        id: 2,
        name: 'Sneakers',
        price: 1099,
    },
    {
        id: 2,
        name: 'Shoes',
        price: 1099,
    },
];

router.get('/', (request, response) => {
    response.send(products);
});

router.get('/:id', (request, response) => {
    const product = products.find(
        product => product.id === parseInt(request.params.id)
    );

    if (!product) {
        response.status(404);
        return response.send('The product with the id does not exist');
    }

    response.send(product);
});

router.post('/', (request, response) => {
    const { error } = validateProduct(request.body);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }

    const product = {
        id: products.length + 1,
        name: request.body.name,
        price: request.body.price,
    };
    products.push(product);
    response.send(product);
});

router.put('/:id', (request, response) => {
    const product = products.find(
        product => product.id === parseInt(request.params.id)
    );

    if (!product) {
        response.status(404);
        return response.send('The product with the id does not exist');
    }

    const { error } = validateProduct(request.body);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }

    product.name = request.body.name;
    product.price = request.body.price;
    response.send(product);
});

router.delete('/:id', (request, response) => {
    const product = products.find(
        product => product.id === parseInt(request.params.id)
    );
    if (!product) {
        response.status(404);
        return response.send('The product with the id does not exist');
    }

    const index = products.indexOf(product);
    products.splice(index, 1);

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