const express = require('express');
const router = express.Router();
const db = require('../models');
const validateProduct = require('../validators/product');
const auth = require('../middleware/auth');

router.get('/', async (request, response) => {
    db.products.findAndCountAll().then(({ count }) => {
        let page = request.query.page;
        page = (page && page > 1) ? page : 1;
        const limit = request.query.perpage || 20;
        const offset = limit * (page - 1);

        db.products.findAll({ limit, offset }).then(result => {
            const pages = Math.ceil(count / limit);
            response.send({ result, count, pages });
        });
    });
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

router.post('/', auth, async (request, response) => {
    const { error } = validateProduct(request.body);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }

    const product = {
        name: request.body.name,
        price: request.body.price,
    };
    await db.products.create(product);
    response.send(product);
});

router.put('/:id', auth, async (request, response) => {
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

router.delete('/:id', auth, async (request, response) => {
    const id = parseInt(request.params.id);
    const product = await db.products.findByPk(id);

    if (!product) {
        response.status(404);
        return response.send('The product with the id does not exist');
    }

    await db.products.destroy({ where: { id } });

    response.send(product);
});

module.exports = router;