import { html } from '../../node_modules/lit-html/lit-html.js';
import { createFact } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';

export async function renderAdd(ctx) {
    ctx.render(addTemplate(createSubmitHandler(onAdd)));

    async function onAdd(data) {
        if(!data.category || !data['image-url'] || !data.description || !data['additional-info']) {
            return alert('All fields are required');
        }
        await createFact(data);
        ctx.page.redirect('/dashboard');
    }
}

const addTemplate = (handler) => html`
<section id="create">
        <div class="form">
          <h2>Add Fact</h2>
          <form @submit=${handler} class="create-form">
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          ></textarea>
            <button type="submit">Add Fact</button>
          </form>
        </div>
</section>
`;