import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOffers } from '../data/endpoints.js';

export async function renderDashboard(ctx) {
    const offers = await getOffers();
    ctx.render(dashboardTemplate(offers));
 
}

const dashboardTemplate = (offers) => html`
<section id="dashboard">
<h2>Job Offers</h2>
${offers.length > 0 ? html`${offers.map(offer => offerTemplate(offer))}` : html`<h2>No offers yet.</h2>`}
</section>
`;

const offerTemplate = (data) => html`
<div class="offer">
  <img src=${data.imageUrl} alt="example1" />
  <p>
    <strong>Title: </strong><span class="title">${data.title}</span>
  </p>
  <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
  <a class="details-btn" href="/details/${data._id}">Details</a>
</div>
`;