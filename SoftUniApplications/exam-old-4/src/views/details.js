import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteAlbumById, getAlbumById } from '../data/endpoints.js';
import { getUser } from '../util.js';

export async function renderDetails(ctx) {
    const user = await getUser();
    const id = ctx.params.id;
    const album = await getAlbumById(id);
    async function deleteHandler() {
        if(confirm('Are you sure you want to delete this album')) {
            await deleteAlbumById(id);
            ctx.page.redirect('/catalog');
        }
        
    }

    ctx.render(detailsTemplate(album, user, deleteHandler));
};

const detailsTemplate = (album, user, deleteHandler) => html`
<section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src=${album.imgUrl}>
            </div>
            <div class="albumInfo">
                <div class="albumText">

                    <h1>Name: ${album.name}</h1>
                    <h3>Artist: ${album.artist}</h3>
                    <h4>Genre: ${album.genre}</h4>
                    <h4>Price: $${album.price}</h4>
                    <h4>Date: ${album.releaseDate}</h4>
                    <p>Description: ${album.description}</p>
                </div>
${user._id === album._ownerId ? html`  <div class="actionBtn">
<a href="/edit/${album._id}" class="edit">Edit</a>
<a @click=${deleteHandler} href="javascript:void(0)" class="remove">Delete</a>
</div>` : nothing }
            </div>
        </div>
    </section>
`;