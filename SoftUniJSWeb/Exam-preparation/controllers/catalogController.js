const { getAll } = require('../services/animalService');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    const animals = await getAll().lean();
    res.render('catalog', {
        animals
    });
});

module.exports = catalogController;