import { html } from '../../node_modules/lit-html/lit-html.js';
import { addFruit } from '../data/endpoints.js';
import { createSubmitHandler } from '../util.js';

export async function renderCreate(ctx) {
  ctx.render(addFruitTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit(fruit) {
    console.log(fruit.name,fruit.imageUrl, fruit.description, fruit.nutrition);
    if(!fruit.name || !fruit.imageUrl || !fruit.description || !fruit.nutrition) {
      return alert('All fields are required!');
    }
    await addFruit(fruit);
    ctx.page.redirect('/dashboard');
  }
}

const addFruitTemplate = (handler) => html`
<section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${handler} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
`;