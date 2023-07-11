import page from '../node_modules/page/page.mjs';
import { getUser } from './util.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { logout } from './data/auth.js';
import { renderHome } from './views/home.js';
import { renderRegister } from './views/register.js';
import { renderLogin } from './views/login.js';
import { renderDashboard } from './views/dashboard.js';
import { renderDetails } from './views/details.js';
import { renderEdit } from './views/edit.js';
import { renderCreate } from './views/create.js';


const root = document.getElementById('wrapper');

page(decorateContext);
page('/index.html', '/');
page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', logoutAction);
page('/create', renderCreate);
page('/details/:id', renderDetails);
page('/edit/:id', renderEdit);
page('/dashboard', renderDashboard);

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;
  next();
}

function renderView(content) {
  const user = getUser();
  render(layoutTemplate(user, content), root);
}

async function logoutAction(ctx) {
  await logout();
  ctx.page.redirect('/dashboard');
}
