const { register } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../utils/parseError');

const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    res.render('register', )
});

registerController.post('/', 
body('firstName')
.trim()
.isLength( { min: 3 }).withMessage('First name must be at least 3 characters long !'),
body('lastName')
.trim()
.isLength( { min: 3 }).withMessage('Last name must be at least 3 characters long !'),
body('email')
.trim()
.isLength( { min: 10 }).withMessage('Email must be at least 10 characters long !'),
body('password')
.trim()
.isLength( { min: 4 } ).withMessage('Password must be at least 4 charecters long !'),
body('repeatPassword')
.trim()
.custom(async (value, { req }) => {
    if(value != req.body.password) {
        throw new Error('Passwords do not match !');
    }
})
.withMessage('Passwords do not match !'),
async (req, res) => {
    try {
        const { errors } = validationResult(req);
        if(errors.length > 0 ) {
            throw errors;
        } 

        const result = await register(req.body.email, req.body.password, req.body.firstName, req.body.lastName);
        const token = req.signJwt(result);

        res.cookie('jwt', token);
        res.redirect('/')
    } catch(error) {
        res.render('register', {
            body: {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            },  
            error: parseError(error),
        })
    }
});

module.exports = registerController;