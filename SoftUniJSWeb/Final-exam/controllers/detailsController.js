const { getById, voteForAnimal } = require('../services/ElectronicsService');
const { parseError } = require('../utils/parseError');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    try {
        const electronics = await getById(req.params.id).lean();

        
        if (!electronics) {
            throw new Error('Electronic not found!');
        }
        
        if(req.user) {
            const user = req.user;

            res.render('details', {
                electronics,
                isOwner: req.user && req.user._id == electronics.owner,
                hasBought: req.user && electronics.buyingList.some(id => id == req.user._id),
                user,
            });
        } else{
            res.render('details', {
                electronics,
                isOwner: req.user && req.user._id == electronics.owner,
                hasBought: req.user && electronics.buyingList.some(id => id == req.user._id),
            });
        }
      

    } catch (error) {
        res.render('details', {
            error: parseError(error),
        });
    }
});



module.exports = detailsController;