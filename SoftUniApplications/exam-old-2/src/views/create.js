import { html } from '../../node_modules/lit-html/lit-html.js';
import { addOffer } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';


export async function renderCreate(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit (data) {
        if(!data.title || !data.imageUrl || !data.category || !data.category || !data.description || !data.requirements || !data.salary) {
            return alert('All field are required')
        }
        const offer = await addOffer(data);
        ctx.page.redirect('/dashboard');
    }
}

const createTemplate = (handler) => html`
<section id="create">
        <div class="form">
          <h2>Create Offer</h2>
          <form @submit=${handler} class="create-form">
            <input
              type="text"
              name="title"
              id="job-title"
              placeholder="Title"
            />
            <input
              type="text"
              name="imageUrl"
              id="job-logo"
              placeholder="Company logo url"
            />
            <input
              type="text"
              name="category"
              id="job-category"
              placeholder="Category"
            />
            <textarea
              id="job-description"
              name="description"
              placeholder="Description"
              rows="4"
              cols="50"
            ></textarea>
            <textarea
              id="job-requirements"
              name="requirements"
              placeholder="Requirements"
              rows="4"
              cols="50"
            ></textarea>
            <input
              type="text"
              name="salary"
              id="job-salary"
              placeholder="Salary"
            />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;