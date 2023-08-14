const { getItemById, deleteById } = require('../services/productService');

const router = require('express').Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const product = getItemById(id);

    res.render('delete', product);
});

router.post('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteById(id);
    const product = getItemById(id);

    res.redirect('/catalog')
});

module.exports = router;