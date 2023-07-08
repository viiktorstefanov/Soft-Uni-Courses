import { page, render } from './lib.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

import * as api from './api/data.js';
import { getUserData } from './api/util.js';

const root = document.getElementById('container');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContent);
page('/', catalogPage);
page('/create', createPage);
page('/my-furniture', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

updateUserNav();
page.start();

function decorateContent(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
};

function updateUserNav() {
    const  userData = getUserData();
    if(userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    }else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function onLogout() {
    await api.logout();
    updateUserNav();
    page.redirect('/');
}