const { getUserAnimals } = require('../services/animalService');
const { getUserInfo } = require('../services/userService');
const { parseError } = require('../utils/parseError');

const profileController = require('express').Router();

profileController.get('/', async (req, res) => {
    try {
        const user = await getUserInfo(req.user._id).lean();

        if (!user) {
            throw new Error('User not found!');
          }

        const animals = await getUserAnimals(req.user._id).lean();

        const ownerName = `${user.firstName} ${user.lastName}`;

          res.render('mypost', {
            animals,
            ownerName,
          });
    } catch (error) {
        res.render('mypost', {
            error: parseError(error)
        })
    }
});

module.exports = profileController;