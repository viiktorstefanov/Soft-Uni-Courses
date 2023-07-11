import { editAlbum } from "../data/endpoints.js";
import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAlbumById } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';


export async function renderEdit(ctx) {
    const id = ctx.params.id;
    const album = await getAlbumById(id);
    ctx.render(editTemplate(createSubmitHandler(onEdit), album));


    async function onEdit(data) {
      if(!data.singer || !data.album || !data.imageUrl || !data.release || !data.label || !data.sales) {
        alert('All fields are required');
      }
      await editAlbum(data, id); 
      ctx.page.redirect(`/details/${id}`);
    }

  }

const editTemplate = (handler, album) => html`
<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form @submit=${handler} class="edit-form">
    <input type="text" name="singer" .value=${album.singer} id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" .value=${album.album} id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" .value=${album.imageUrl} id="album-img" placeholder="Image url" />
    <input type="text" name="release" .value=${album.release} id="album-release" placeholder="Release date" />
    <input type="text" name="label" .value=${album.label} id="album-label" placeholder="Label" />
    <input type="text" name="sales" .value=${album.sales} id="album-sales" placeholder="Sales" />
    <button type="submit">post</button>
  </form>
</div>
</section>
`;

