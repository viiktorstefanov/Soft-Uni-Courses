import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';

//change root depend on html structure
const root = document.body;

page(decorateContext);
page('index.html', '/');
page('/', homePage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

// inject dependecies
function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData,content), root)
}