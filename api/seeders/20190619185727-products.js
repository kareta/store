'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const products = [];
        for (let i = 0; i < 1000; i++) {
            const product = {
                name: 'Shoes',
                price: 10000,
                createdAt : new Date(),
                updatedAt : new Date(),
            };
            products.push(product);
        }

        return queryInterface.bulkInsert('products', products, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('products', null, {});
    }
};
