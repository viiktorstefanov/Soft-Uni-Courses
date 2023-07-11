import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAlbums } from '../data/endpoints.js';

export async function renderDashboard(ctx) {
    const albums = await getAlbums();
    ctx.render(dashboardTemplate(albums));
  }

const dashboardTemplate = (albums) => html`
${albums.length > 0 ? html`
<section id="dashboard">
<h2>Albums</h2>
<ul class="card-wrapper">
${albums.map(album => albumTemplate(album))}
</ul>
</section>` 
: html`<section id="dashboard">
<h2>Albums</h2>
<h2>There are no albums added yet.</h2>
</section>`}`;

const albumTemplate = (album) => html`
<li class="card">
    <img src=${album.imageUrl} alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/details/${album._id}">Details</a>
  </li>
`;