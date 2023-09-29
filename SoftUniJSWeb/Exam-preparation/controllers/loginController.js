const loginController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { parseError } = require('../utils/parseError');
const { login } = require('../services/userService');

loginController.get('/', (req, res) => {
    res.render('login',)
});

loginController.post('/',
    body('email')
        .trim()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long !'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 charecters long !'),
    async (req, res) => {

        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }
            const result = await login(req.body.email, req.body.password);
            const token = req.signJwt(result);

            res.cookie('jwt', token);
            res.redirect('/');

        } catch (error) {
            res.render('login', {
                body: {
                    email: req.body.email
                },
                error: parseError(error),

            });
        }
    });

module.exports = loginController;