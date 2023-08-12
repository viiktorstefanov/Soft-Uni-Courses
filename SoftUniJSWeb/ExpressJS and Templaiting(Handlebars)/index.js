const express = require('express');
const hbs = require('express-handlebars');
const port = 3000;

const homeController = require('./controllers/home');
const catalogController = require('./controllers/catalog');
const createController = require('./controllers/create');

const handlebars = hbs.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs' );

app.use(express.urlencoded({ extended: false }));
app.use('/static',express.static('static'));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);



app.listen(port);