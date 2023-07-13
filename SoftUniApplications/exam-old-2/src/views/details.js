import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { applyOffer, deleteOffer, getOfferApplicationsCount, getOfferById, getUserApplicationCheck } from '../data/endpoints.js';
import { getUser } from '../util.js';

export async function renderDetails (ctx) {
    const id = ctx.params.id;
    const user = await getUser();
    const data = await getOfferById(id);
    data.isOwner = user && user._id === data._ownerId;
    const count = Number(await getOfferApplicationsCount(id));
    const isApplied = await getUserApplicationCheck(id, user._id);

    async function deleteHandler (event) {
        event.preventDefault();
        if(confirm('Are you sure you want to delete this offer?')) {
            await deleteOffer(id);
            ctx.page.redirect('/dashboard');
          }
    }

    async function applyHandler (event) {
        event.preventDefault();
        event.currentTarget.style.display = 'none';
        await applyOffer(id);
        let count = Number(await getOfferApplicationsCount(id));
        
        ctx.render(detailsTemplate(data, user, deleteHandler, applyHandler, count));   
          
    }

    ctx.render(detailsTemplate(data, user, deleteHandler, applyHandler, count, isApplied));
}

const detailsTemplate = (data, user, deleteHandler, applyHandler, count, isApplied) => html`
<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${data.imageUrl} alt="example1" />
          <p id="details-title">${data.title}</p>
          <p id="details-category">
            Category: <span id="categories">${data.category}</span>
          </p>
          <p id="details-salary">
            Salary: <span id="salary-number">${data.salary}</span>
          </p>
          <div id="info-wrapper">
            <div id="details-description">
              <h4>Description</h4>
              <span
                >${data.description}</span
              >
            </div>
            <div id="details-requirements">
              <h4>Requirements</h4>
              <span
                >${data.requirements}</span
              >
            </div>
          </div>
          <p>Applications: <strong id="applications">${count ? html`${count}` : 0}</strong></p>
          <div id="action-buttons">
          ${data.isOwner ? html`     <a href="/edit/${data._id}" id="edit-btn">Edit</a>
          <a @click=${deleteHandler} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing}
          ${user && user._id !== data._ownerId && isApplied === 0 ? html`<a @click=${applyHandler} href="" id="apply-btn">Apply</a>` : nothing }
        </div>
      </div>
    </section>
`;