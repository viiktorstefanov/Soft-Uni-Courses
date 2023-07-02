import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const result = document.getElementById('result');
const townsDiv = document.getElementById('towns');
const searchBtn = document.getElementById('search');

const renderTowns = (towns) => html`
<ul>
   ${towns.map(town => html`<li>${town}</li>`)};
</ul>`;

render(renderTowns(towns), townsDiv);

searchBtn.addEventListener('click', (e) => {
   e.preventDefault();

   let input = document.getElementById('searchText');
 
   const count = Array.from(document.querySelectorAll('#towns ul li')).reduce(
      (acc, curr) => {
        if (curr.textContent.includes(input.value)) {
          curr.classList.add('active');
          acc++;
        } else {
          curr.classList.remove('active');
        }
        return acc;
      },
      0
    );
    result.textContent = `${count} matches found`;
})