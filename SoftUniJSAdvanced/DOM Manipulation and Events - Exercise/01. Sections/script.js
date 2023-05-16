function create(words) {
   let content = document.getElementById('content');
   for (const text of words) {
   let divElement = document.createElement('div');
   let pElement = document.createElement('p');
   pElement.textContent = text;
   pElement.style.display = 'none';
   divElement.appendChild(pElement);

   divElement.addEventListener('click', () => {
      pElement.style.display = 'block';
   })
   content.appendChild(divElement);
   }
}