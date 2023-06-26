import { jsonRequest } from "../helpers/httpService.js";
import viewFinder from "./viewFinder.js";

let section ;

export function initialize(domElement) {
    section = domElement;
}

export async function getView() {
    let url = 'http://localhost:3030/data/movies';
    let movies = await jsonRequest(url);

    let moviesHTML = movies.map(m => createMovieHTML(m)).join('\n');
    let movieContainer = section.querySelector('#movie-container');
    movieContainer.querySelectorAll('.movie').forEach(movie => movie.remove())
    
    movieContainer.innerHTML = moviesHTML;
    movieContainer.querySelectorAll('.link').forEach(l => l.addEventListener('click', viewFinder.changeViewHandler));

    return section;
}

let homePage = {
    initialize,
    getView,
};

function createMovieHTML(movie) {
    let elem = `<div class="card mb-4 movie">
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a class="link" data-route="movie-details" data-id="${movie._id}" href="#/details/6lOxMFSMkML09wux6sAF">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>`
    return elem;
}

export default homePage;