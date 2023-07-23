import { html } from '../../node_modules/lit-html/lit-html.js';
import { editFactById, getFactById } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';

export async function renderEdit(ctx) {
    const id = ctx.params.id;
    const fact = await getFactById(id);
    ctx.render(editTemplate(createSubmitHandler(onEdit), fact));

    async function onEdit(data) {
        if(!data.category || !data['image-url'] || !data.description || !data['additional-info']) {
            return alert('All fields are required');
        }
        await editFactById(id, data);
        ctx.page.redirect(`/details/${id}`);
    }
}

const editTemplate = (handler, fact) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Fact</h2>
          <form @submit=${handler} class="edit-form">
            <input
            type="text"
            name="category" .value=${fact.category}
            id="category"
            placeholder="Category"
          />
          <input
            type="text" .value=${fact.imageUrl}
            name="image-url"
            id="image-url"
            placeholder="Image URL"
          />
          <textarea 
          id="description" .value=${fact.description}
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          id="additional-info"
          name="additional-info" .value=${fact.moreInfo}
          placeholder="Additional Info"
          rows="10"
          cols="50"
        ></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
</section>
`;