import { contacts } from './contacts.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('contacts');


    const test = (contact) => {
       let a = html `
        <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${contact.name}</h2>
            <button @click=${btnHandler} class="detailsBtn">Details</button>
            <div class="details" id="${contact.id}">
                <p>Phone number: ${contact.phoneNumber}</p>
                <p>Email: ${contact.email}</p>
            </div>
        </div>
        </div>`;
        return a;
    }
    const btnHandler = (e) => {
        e.preventDefault();
        let infoDiv = e.currentTarget.parentElement;
        let detailsDiv = infoDiv.querySelector('.details');
        if(detailsDiv.style.display == 'block') {
            detailsDiv.style.display = 'none';
        }else {
            detailsDiv.style.display = 'block';
        }
    }
    render(contacts.map(test), root);

