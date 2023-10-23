const { getById, deleteElectronics } = require('../services/ElectronicsService');
const { parseError } = require('../utils/parseError');



const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
  try {
      await deleteElectronics(req.params.id);
      res.redirect('/catalog');
      
    } catch (error) {
      res.render('404');
    }
  });

module.exports = deleteController;