import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

const templateCat = (cats) =>
    html`<ul>
    ${cats.map(cat => html`<li>
    <img
      src="./images/${cat.imageLocation}.jpg"
      wdith="250"
      height="250"
      alt="Card image cap"
    />
    <div class="info">
      <button class="showBtn" @click=${onClick}>Show status code</button>
      <div class="status" style="display: none" id=${cat.id}>
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
      </div>
    </div>
  </li>`)}
  </ul>`;

function onClick(e) {
    e.preventDefault();
    let div = e.currentTarget.nextElementSibling;
    if (e.target.textContent === 'Show status code') {
        div.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        div.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
};
render(templateCat(cats), root);


