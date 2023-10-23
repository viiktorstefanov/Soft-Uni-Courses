const { createElectronics } = require('../services/ElectronicsService');
const { parseError } = require('../utils/parseError');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', async (req, res) => {
  const {
    name, type, production, exploitation, damages, image, price, description
} = req.body;
  
    try {
        await createElectronics({
            name,
            type,
            production,
            exploitation,
            damages,
            image,
            price,
            description,
            owner: req.user._id,
        })
      res.redirect('/catalog');
    } catch (error) {
      res.render('create', {
        error: parseError(error),
        name,
        type,
        production,
        exploitation,
        damages,
        image,
        price,
        description,
      });
    }
  });

module.exports = createController;