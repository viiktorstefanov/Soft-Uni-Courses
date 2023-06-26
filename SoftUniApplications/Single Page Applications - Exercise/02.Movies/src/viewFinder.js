import auth from "../helpers/authorization.js";
import homePage from "./home.js";
import loginPage from "./login.js";
import movieDetailsPage from "./movie-details.js";
import registerPage from "./register.js";



let views = {
    'home': async () => await homePage.getView(),
    'login': async () => await loginPage.getView(),
    'register': async () => await registerPage.getView(),
    'movie-details': async () => await movieDetailsPage.getView(),
    'logout': async () => { 
        let a = auth.logout();
        return a;
    },
    
};

function initialize(allLinksElements) {
    allLinksElements.forEach(a => a.addEventListener('click', changeViewHandler));
}

export async function changeViewHandler(e) {
    let element = e.target.matches('.link')
    ? e.target : e.target.closest('.link');
    let route = element.dataset.route;
    let id = element.dataset.id;
    navigateTo(route, id);
}

export async function navigateTo(route, id) {
    console.log(route);
    if (views.hasOwnProperty(route)) {
        let view = await views[route](id);
        let appElement = document.getElementById('main');
        appElement.querySelectorAll('.view').forEach(sec => sec.remove());
        appElement.appendChild(view);
    }
}

export async function redirectTo(route) {
    if (views.hasOwnProperty(route)) {
        let viewFunc = views[route]();
        return viewFunc;
    }
}

let viewFinder = {
    initialize,
    navigateTo,
    changeViewHandler,
    redirectTo,
}

export default viewFinder;