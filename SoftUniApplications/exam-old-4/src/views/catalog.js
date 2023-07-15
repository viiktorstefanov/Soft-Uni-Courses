import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getAlbums } from '../data/endpoints.js';
import { getUser } from '../util.js';

export async function renderCatalog(ctx) {
    const albums = await getAlbums();
    const user = await getUser();
    ctx.render(catalogTemplate(albums, user));

}

const catalogTemplate = (albums, user) => html`
<section id="catalogPage">
<h1>All Albums</h1>
${albums.length > 0 ? html`${albums.map(album => albumTemplate(album, user))}` : html`<p>No Albums in Catalog!</p>`}
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
                <div class="btn-group">
                ${user ? html`<a href="/details/${album._id}" id="details">Details</a>` : nothing }
                </div>
            </div>
    </div>
`;