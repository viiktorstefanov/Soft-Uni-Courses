const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const authorization = require('../middlewares/authorization');
const navUser = require('../middlewares/navUser');

const secret = 'mostDangerousPassword1995';


module.exports = (app) => {
    const hbs = handlebars.create({
        extname: '.hbs'
    });
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(authorization(secret));
    app.use(navUser());

}