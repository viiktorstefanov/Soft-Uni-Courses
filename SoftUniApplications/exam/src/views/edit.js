import { html } from '../../node_modules/lit-html/lit-html.js';
import { editFruit, getFruitById } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';

export async function renderEdit(ctx) {
  const id = ctx.params.id;

  const fruit = await getFruitById(id);
  ctx.render(editTemplate(createSubmitHandler(onSubmit), fruit));

  async function onSubmit(handler) {
    
    if (!handler.name || !handler.imageUrl || !handler.description || !handler.nutrition) {
      return alert('All fields are required!');
    }
    await editFruit(handler,id);
     ctx.page.redirect(`/details/${id}`);
    
  }
}

const editTemplate = (handler, fruit) => html`
<section id="edit">
<div class="form">
  <h2>Edit Fruit</h2>
  <form @submit=${handler} class="edit-form">
    <input
      type="text"
      name="name"
      id="name"
      .value=${fruit.name}
    />
    <input
      type="text"
      name="imageUrl"
      id="Fruit-image"
      .value=${fruit.imageUrl}
    />
    <textarea
      id="fruit-description"
      name="description"
      .value=${fruit.description}
      rows="10"
      cols="50"
    ></textarea>
    <textarea
      id="fruit-nutrition"
      name="nutrition"
      .value=${fruit.nutrition}
      rows="10"
      cols="50"
    ></textarea>
    <button type="submit">post</button>
  </form>
</div>
</section>`;
