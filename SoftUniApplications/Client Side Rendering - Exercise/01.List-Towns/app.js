import { html, render } from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('towns').value;
    if(input.length > 0) {
      let inputs = input.split(', ');
      render(townsTemplate(inputs), root);
      form.reset();
    }   
});

const townsTemplate = (inputs) => 
 html`<ul>
 ${inputs.map((item) => html`<li>${item}</li>`)}
 </ul>`;
