const { canUserBuy, userAlreadyBought } = require('../middlewares/guards');
const { buy } = require('../services/ElectronicsService');

const buyController = require('express').Router();

buyController.get('/:id', canUserBuy(), userAlreadyBought(), async (req, res) => {
    await buy(req.params.id, req.user._id);
    res.redirect('/details/' + req.params.id);
});

module.exports = buyController; 