import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteFactById, getFactById, getLikesCount, getUserLikes, likeFact } from '../data/endpoints.js';
import { getUser } from '../util.js';

export async function renderDetails(ctx) {
    const user = await getUser();
    const id = ctx.params.id;
    const fact = await getFactById(id);
    if(user) {
        user.likes = await getUserLikes(id, user._id);
    }
    fact.isOwner = user && user._id === fact._ownerId;
    
    async function deleteHandler() {
        if(confirm('Are you sure you want to delete this fact')) {
            await deleteFactById(id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function likeHandler() {
        await likeFact(id);
        ctx.render(detailsTemplate(fact, user));
    }
    fact.likeHandler = likeHandler;
    fact.deleteHandler = deleteHandler;
    fact.likes = await getLikesCount(id);
    ctx.render(detailsTemplate(fact, user));
};

const detailsTemplate = (fact, user) => html`
<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${fact.imageUrl} alt="example1" />
          <p id="details-category">${fact.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">
                ${fact.description}
                </p>
                 <p id ="more-info">
                ${fact.moreInfo}
                </p>
            </div>
            <h3>Likes:<span id="likes">${fact.likes}</span></h3>
            <div id="action-buttons">
            ${fact.isOwner ? 
                 html`<a href="/edit/${fact._id}" id="edit-btn">Edit</a><a @click=${fact.deleteHandler} href="javascript:void(0)" id="delete-btn">Delete</a>` 
                : nothing }
            ${user && !fact.isOwner && user.likes < 1 ? html`<a @click=${fact.likeHandler} href="" id="like-btn">Like</a>` : nothing}
        </div>
          </div>
      </div>
    </section>
`;