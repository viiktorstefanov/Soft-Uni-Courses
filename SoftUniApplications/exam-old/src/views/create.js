import { html } from '../../node_modules/lit-html/lit-html.js';
import { createAlbum } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';

export async function renderCreate(ctx) {
    const id = ctx.params.id;
    ctx.render(createTemplete(createSubmitHandler(onCreate)));

    async function onCreate(data) {
      if(!data.singer || !data.album || !data.imageUrl || !data.release || !data.label || !data.sales) {
        alert('All fields are required');
      }
      await createAlbum(data);
      ctx.page.redirect(`/dashboard`);
    }
  }

const createTemplete = (handler) => html`
<section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form @submit=${handler} class="create-form">
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />
    <button type="submit">post</button>
  </form>
</div>
</section>
`;

