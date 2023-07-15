import { html } from '../../node_modules/lit-html/lit-html.js';
import { editAlbumById, getAlbumById } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';

export async function renderEdit(ctx) {
    const id = ctx.params.id;
    const album = await getAlbumById(id);
    ctx.render(editTemplate(createSubmitHandler(onEdit), album));

    async function onEdit(data) {
        if(!data.name || !data.imgUrl || !data.price || !data.releaseDate || !data.artist || !data.genre || !data.description) {
            return alert('All fields are required');
        }
        const editAlbum = await editAlbumById(id, data);
        ctx.page.redirect(`/details/${id}`);
    }
}

const editTemplate = (handler, album) => html`
<section class="editPage">
        <form @submit=${handler}>
            <fieldset>
                <legend>Edit Album</legend>

                <div class="container">
                    <label for="name" class="vhide">Album name</label>
                    <input id="name" .value=${album.name} name="name" class="name" type="text" value="In These Silent Days">

                    <label for="imgUrl" class="vhide">Image Url</label>
                    <input id="imgUrl" .value=${album.imgUrl} name="imgUrl" class="imgUrl" type="text" value="./img/BrandiCarlile.png">

                    <label for="price" class="vhide">Price</label>
                    <input id="price" .value=${album.price} name="price" class="price" type="text" value="12.80">

                    <label for="releaseDate" class="vhide">Release date</label>
                    <input id="releaseDate" .value=${album.releaseDate} name="releaseDate" class="releaseDate" type="text" value="October 1, 2021">

                    <label for="artist" class="vhide">Artist</label>
                    <input id="artist" .value=${album.artist} name="artist" class="artist" type="text" value="Brandi Carlile">

                    <label for="genre" class="vhide">Genre</label>
                    <input id="genre" .value=${album.genre} name="genre" class="genre" type="text" value="Low Country Sound Music">

                    <label for="description" class="vhide">Description</label>
                    <textarea name="description" .value=${album.description} class="description" rows="10"
                        cols="10">Upon release, In These Silent Days received positive reviews from critics. At Metacritic, which assigns a normalized rating out of 100 to reviews from mainstream critics, the album has an average score of 87 out of 100, which indicates 'universal acclaim'.</textarea>

                    <button class="edit-album" type="submit">Edit Album</button>
                </div>
            </fieldset>
        </form>
    </section>
`;