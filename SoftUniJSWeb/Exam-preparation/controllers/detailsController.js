const { getById, voteForAnimal } = require('../services/animalService');
const { parseError } = require('../utils/parseError');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    try {
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

        if(req.user) {
            res.render('details', {
                animal,
                ownerName,
                isOwner,
                isLogged,
                hasVoted,
                votes,
                voteEmails,
            });
        } else {
            res.render('details', {
                animal,
                ownerName,
                isOwner,
                isLogged,
                votes,
                voteEmails,
            });
        }

    } catch (error) {
        res.render('details', {
            error: parseError(error)
        });
    }
});

detailsController.get('/:id/vote', async (req, res) => {
    try {
      const animalId = req.params.id;
      const userId = req.user._id;

      const vote = await voteForAnimal(animalId, userId);
      res.redirect(`/catalog/details/${animalId}`);
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

module.exports = detailsController;