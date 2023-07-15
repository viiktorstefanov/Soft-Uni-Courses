import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { searchAlbum } from '../data/endpoints.js';
import { getUser } from '../util.js';

export async function renderSearch(ctx) {
    const user = await getUser();
    async function searchHandler(event) {
        event.preventDefault();
        let query = document.getElementById('search-input').value.trim();
        if(query.length === 0) {
            return alert('Please enter a album name');
        }
        let matches = await searchAlbum(query);
        ctx.render(searchTemplate(user, searchHandler, matches));
    }

    ctx.render(searchTemplate(user, searchHandler, []));
}

const searchTemplate = (user, searchHandler, matches) => html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button @click=${searchHandler} class="button-list">Search</button>
</div>

<h2>Results:</h2>
<!--Show after click Search button-->
<div class="search-result">
${matches.length > 0 ? html`${matches.map(album => albumTemplate(album, user))}` : html`<p class="no-result">No result.</p>`}
</div>
</section>
`;


const albumTemplate = (album, user) => html`
<div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${user ? html` <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : nothing }
           
        </div>
    </div>
`;