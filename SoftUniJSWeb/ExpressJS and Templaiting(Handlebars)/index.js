const express = require('express');
const hbs = require('express-handlebars');
const port = 3000;

const handlebars = hbs.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs' );

app.get('/', (req,res) => {
    res.render('home', {
        title: 'handlebars demo',
        contacts: [
            {
                name: 'Peter',
                email: 'peter@abv.bg'
            },
            {
                name: 'ivan',
                email: 'ivan@abv.bg'
            }
        ]
    });
});

app.listen(port);