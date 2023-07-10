import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteFruit, getFruitById } from '../data/endpoints.js';

import { getUser } from '../util.js';

export async function renderDetails(ctx) {
  const id = ctx.params.id;
  const fruit = await getFruitById(id);
  const user = getUser();

  fruit.isOwner = user && user._id === fruit._ownerId;

  async function deleteHandler(event) {
    event.preventDefault();
    if(confirm('Are you sure you want to delete this fruit?')) {
      await deleteFruit(id);
      ctx.page.redirect('/');
    }
  }

  ctx.render(detailsTemplate(fruit, deleteHandler, ));

}

const detailsTemplate = (fruit, deleteHandler) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${fruit.imageUrl} alt="example1" />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${fruit.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id = "details-nutrition">
                ${fruit.nutrition}  
                </p>
              </div>
          <div id="action-buttons">
            ${fruit.isOwner ? html`
            <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
            <a @click=${deleteHandler} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing }
          </div>
            </div>
        </div>
      </section>
`;

