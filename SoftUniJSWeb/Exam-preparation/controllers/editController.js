const { getById, editAnimal } = require('../services/animalService');
const { parseError } = require('../utils/parseError');

const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    try {
      const animal = await getById(req.params.id).lean();

      if (!animal) {
        throw new Error('Animal not found!');
      }
  
      const isOwner = animal.owner.toString() === req.user._id;
      if (!isOwner) {
        throw new Error('You are not the owner of this animal!');
      }
  
      res.render('edit', { animal });
    } catch (error) {
      res.render('edit', {
        error: parseError(error)
      })
    }
  });

  editController.post('/:id', async (req, res) => {
      const { name, species, skinColor, eyeColor, image, description, owner } =
      req.body;

    try {
      if (owner !== req.user._id) {
        throw new Error('You don`t own this animal!');
      }

      await editAnimal(req.params.id, {
        name,
        species,
        skinColor,
        eyeColor,
        image,
        description,
      });
  
      res.redirect(`/catalog/details/${req.params.id}`);
    } catch (error) {
      res.render('edit', {
        error: parseError(error),
        animal: {
          name,
          species,
          skinColor,
          eyeColor,
          image,
          description,
          owner,
        },
      });
    }
  });

module.exports = editController;




