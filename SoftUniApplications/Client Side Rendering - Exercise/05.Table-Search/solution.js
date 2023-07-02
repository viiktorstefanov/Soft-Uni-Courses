import { html, render } from './node_modules/lit-html/lit-html.js';

const tbody = document.getElementById('tbody');
const url = `http://localhost:3030/jsonstore/advanced/table`;

async function request(url) {
   try {
      let response = await fetch(url);
      if(!response.ok) {
         throw new Error(response.message);
      }
      let data = await response.json();
      return data;
   } catch (error) {
      alert(error.message);
   }
}

async function loadData () {
   let data = await request(url);
   render (Object.values(data).map(line => loadTemplate(line)), tbody);

   const searchBtn = document.getElementById('searchBtn');
   

   searchBtn.addEventListener('click', onClick);

};
loadData();


const loadTemplate = (user) => html`
<tr>
<td>${user.firstName} ${user.lastName}</td>
<td>${user.email}</td>
<td>${user.course}</td>
</tr>
`;

function onClick (e) {
   e.preventDefault();
   let lines = Array.from(document.querySelectorAll('#tbody tr'));
   let input = document.getElementById('searchField');

   Array.from(document.querySelectorAll('tbody tr')).forEach((row) => {
      if (
        row.textContent
          .toLowerCase()
          .trim()
          .includes(input.value.toLowerCase().trim())
      ) {
        row.classList.add('select');
      } else {
        row.classList.remove('select');
      }
    });

   input.value = "";
   
}
