import { html } from '../../node_modules/lit-html/lit-html.js';
import { editOffer, getOfferById } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';

export async function renderEdit(ctx) {
    const id = ctx.params.id;
    const offerInputs = await getOfferById(id);

    ctx.render(editTemplate(createSubmitHandler(onEdit), offerInputs));

    async function onEdit(data) {
        if(!data.title || !data.imageUrl || !data.category || !data.category || !data.description || !data.requirements || !data.salary) {
          return alert('All fields are required');
        }
        const edit = await editOffer(data, id);
        ctx.page.redirect(`/details/${id}`)
    }

}

const editTemplate = (handler, offerInputs) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Offer</h2>
          <form @submit=${handler} class="edit-form">
            <input
              type="text"
              name="title"
              .value=${offerInputs.title}
              id="job-title"
              placeholder="Title"
            />
            <input
              type="text"
              name="imageUrl"
              .value=${offerInputs.imageUrl}
              id="job-logo"
              placeholder="Company logo url"
            />
            <input
              type="text"
              name="category"
              .value=${offerInputs.category}
              id="job-category"
              placeholder="Category"
            />
            <textarea
              id="job-description"
              name="description"
              .value=${offerInputs.description}
              placeholder="Description"
              rows="4"
              cols="50"
            ></textarea>
            <textarea
              id="job-requirements"
              .value=${offerInputs.requirements}
              name="requirements"
              placeholder="Requirements"
              rows="4"
              cols="50"
            ></textarea>
            <input
              type="text"
              .value=${offerInputs.salary}
              name="salary"
              id="job-salary"
              placeholder="Salary"
            />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;