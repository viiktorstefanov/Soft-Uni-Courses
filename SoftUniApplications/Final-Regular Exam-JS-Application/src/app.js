import { render } from '../node_modules/lit-html/lit-html.js';
import  page  from '../node_modules/page/page.mjs';
import { getUser } from './util.js';
import { renderAdd } from './views/add.js';
import { renderDashboard } from './views/dashboard.js';
import { renderDetails } from './views/details.js';
import { renderEdit } from './views/edit.js';
import { renderHome } from './views/home.js';
import { layoutTemplate } from './views/layout.js';
import { renderLogin } from './views/login.js';
import { renderLogout } from './views/logout.js';
import { renderRegister } from './views/register.js';

const root = document.querySelector('body');

page(decorateContext);
page('/index.html', '/');
page('/', renderHome);
page('/logout', renderLogout);
page('/login', renderLogin);
page('/register', renderRegister);
page('/add', renderAdd);
page('/dashboard', renderDashboard);
page('/details/:id', renderDetails);
page('/edit/:id', renderEdit);

page.start();

function decorateContext(ctx, next ) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const user = getUser();
    render(layoutTemplate(user, content), root);
}