import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFacts } from '../data/endpoints.js';

export async function renderDashboard(ctx) {
    const facts = await getFacts();
    ctx.render(dashboardTemplate(facts));
}

const dashboardTemplate = (facts) => html`
<h2>Fun Facts</h2>
      <section id="dashboard">
      ${facts.length > 0 ? html`${facts.map(fact => factTemplate(fact))}` : html`<h2>No Fun Facts yet.</h2>`}
      </section> 
`;

const factTemplate = (fact) => html`
<div class="fact">
          <img src=${fact.imageUrl} alt="example1" />
          <h3 class="category">${fact.category}</h3>
          <p class="description">${fact.description}</p>
          <a class="details-btn" href="/details/${fact._id}">More Info</a>
</div>
`;