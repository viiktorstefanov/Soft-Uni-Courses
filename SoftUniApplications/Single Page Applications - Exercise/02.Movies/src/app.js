import addMoviePage from "./add-movie.js";
import editMoviePage from "./edit-movie.js";
import homePage from "./home.js";
import loginPage from "./login.js";
import movieDetailsPage from "./movie-details.js";
import nav from "./nav.js";
import registerPage from "./register.js";
import viewFinder from "./viewFinder.js";



setup();

async function setup () {
//get all sections from dom
homePage.initialize(document.getElementById('home-page'));
loginPage.initialize(document.getElementById('form-login'))
registerPage.initialize(document.getElementById('form-sign-up'));
nav
movieDetailsPage.initialize(document.getElementById('movie-details'));
addMoviePage.initialize(document.getElementById('add-movie'));
editMoviePage.initialize(document.getElementById('edit-movie'));
viewFinder.initialize(document.querySelectorAll('.link'));

viewFinder.navigateTo('home');
}
