const { createAnimal } = require('../services/animalService');
const { parseError } = require('../utils/parseError');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description } = req.body;
  
    try {
        await createAnimal({
            name,
            species,
            skinColor,
            eyeColor,
            image,
            description,
            owner: req.user._id,
        })
      res.redirect('/catalog');
    } catch (error) {
      res.render('create', {
        error: parseError(error),
        name,
        species,
        skinColor,
        eyeColor,
        image,
        description,
      });
    }
  });

module.exports = createController;