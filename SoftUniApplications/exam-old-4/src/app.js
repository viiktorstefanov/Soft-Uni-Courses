import { render } from '../node_modules/lit-html/lit-html.js';
import  page  from '../node_modules/page/page.mjs';
import { getUser } from './util.js';
import { renderCatalog } from './views/catalog.js';
import { renderCreate } from './views/create.js';
import { renderDetails } from './views/details.js';
import { renderEdit } from './views/edit.js';
import { renderHome } from './views/home.js';
import { layoutTemplate } from './views/layout.js';
import { renderLogin } from './views/login.js';
import { logoutAction } from './views/logout.js';
import { renderRegister } from './views/register.js';
import { renderSearch } from './views/search.js';




const root = document.getElementById('body');

page(decorateContext);
page('/index.html', '/');
page('/', renderHome);
page('/logout', logoutAction);
page('/login', renderLogin);
page('/register', renderRegister);
page('/create', renderCreate);
page('/catalog', renderCatalog);
page('/details/:id', renderDetails);
page('/edit/:id', renderEdit);
page('/search', renderSearch);

page.start();


function decorateContext(ctx, next ) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const user = getUser();
    render(layoutTemplate(user, content), root);
}