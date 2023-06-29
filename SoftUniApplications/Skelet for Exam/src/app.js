import { initialize } from './router.js';
import { showCatalog } from './pages/catalog.js';
import { showCreate } from './pages/create.js';
import { showDetails } from './pages/details.js';
import { showHome } from './pages/home.js';
import { showLogin } from './pages/login.js';
import { showRegister } from './pages/register.js';
import { logout } from './users.js';

//remove all from dom
document.getElementById('views').remove();

const links = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/details': showDetails,
    '/create': showCreate,
    '/catalog': showCatalog,
    '/logout': onLogout
} 

const router = initialize(links);
router.updateNav();

// start application in home page
router.goTo('/');

function onLogout( ) {
    logout();
    router.updateNav();
    router.goTo('/');
}

