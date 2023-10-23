const { getAll, searchItems } = require('../services/ElectronicsService');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    
    let electronics;

    if(req.query.name || req.query.type) {
        electronics = await searchItems(req.query.name || "", req.query.type || "");
    }else {
        electronics = await getAll().lean();
    }

    res.render('search',{
        search : req.query || {},
        electronics
    });
});

module.exports = searchController; 