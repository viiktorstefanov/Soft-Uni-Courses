const { getById, deleteAnimal } = require('../services/animalService');
const { parseError } = require('../utils/parseError');



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
      const animal = await getById(req.params.id, ['owner', 'votes']).lean();

        if (!animal) {
            throw new Error('Animal not found!');
        }

        const ownerName = `${animal.owner.firstName} ${animal.owner.lastName}`;
        const isLogged = req.user !== undefined;
        const isOwner = isLogged && animal.owner._id.toString() === req.user._id;
        let hasVoted;
        
        if(req.user) {
             hasVoted = animal.votes.some(
                (vote) => vote._id.toString() === req.user._id
            );
        }

        const votes = animal.votes.length;
        const voteEmails = animal.votes.map((vote) => vote.email).join(', ');

        res.render('details', {
            animal,
            ownerName,
            isOwner,
            isLogged,
            votes,
            voteEmails,
            error: parseError(error)
        })
    }
  });

module.exports = deleteController;