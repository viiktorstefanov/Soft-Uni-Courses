const { getById, deleteAnimal } = require('../services/animalService');


const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    try {
      const animal = await getById(req.params.id);

      if (!animal) {
        throw new Error('Animal not found!');
      }
  
      const isOwner = animal.owner.toString() === req.user._id;

      if (!isOwner) {
        throw new Error('You are not the owner of this animal!');
      }
  
      await deleteAnimal(req.params.id);
      res.redirect('/catalog');
      
    } catch (error) {
      res.redirect(`/catalog/details/${req.params.id}`)
    }
  });

module.exports = deleteController;