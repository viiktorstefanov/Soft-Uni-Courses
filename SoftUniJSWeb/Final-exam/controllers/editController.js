const { getById, editElectronics } = require('../services/ElectronicsService');
const { parseError } = require('../utils/parseError');

const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    try {
      const electronics = await getById(req.params.id).lean();

      if (!electronics) {
        throw new Error('Electronic not found!');
      }
  
      const isOwner = electronics.owner.toString() === req.user._id;
      if (!isOwner) {
        throw new Error('You are not the owner of this electronic!');
      }
  
      res.render('edit', { electronics });
    } catch (error) {
      res.render('edit', {
        error: parseError(error)
      })
    }
  });

  editController.post('/:id', async (req, res) => {
    const { name, type, production, exploitation, damages, image, price, description } = req.body;

    try {
      await editElectronics(req.params.id, {
        name,
        type,
        production,
        exploitation,
        damages,
        image,
        price,
        description,
      });
  
      res.redirect(`/details/${req.params.id}`);
    } catch (error) {
      res.render('edit', {
        error: parseError(error),
        electronics: {
          name,
          type,
          production,
          exploitation,
          damages,
          image,
          price,
          description,
        },
      });
    }
  });

module.exports = editController;




