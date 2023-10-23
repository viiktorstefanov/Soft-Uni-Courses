const { getAll } = require('../services/ElectronicsService');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    const electronics = await getAll().lean();
    res.render('catalog', {
        electronics
    });
});

module.exports = catalogController;