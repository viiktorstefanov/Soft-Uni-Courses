import { html, render} from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('menu');
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const loadOptions = async () => {
    try {
        let response = await fetch(url);
        if(response.ok) {
            let options = await response.json();
            const optionTemplate = (options) => html`
            ${Object.entries(options).map(option => {
                let id = option[0];
                let selectOption = option[1];
                return html`
                <option value="${id}">${selectOption.text}</option>
                ` 
            })}
            `;
            render(optionTemplate(options),root);
        } else {
                const error = options;
                throw error;
              
        }
    } catch (error) {
        alert(error.message);
    }
}

loadOptions();

let form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
e.preventDefault();

let input = document.getElementById('itemText').value;

let response = await post(input);

form.reset();
loadOptions();
});

let post = async function (input) {
    let data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'text': `${input[0].toUpperCase()}${(input.slice(1)).toLowerCase()}`})
    }

    try {
        let response = await fetch(url, data);
        if (!response.ok) {
            throw await response.json();
          }
        return await response.json();
    } catch(error) {
        alert(error.message);
    }
}

