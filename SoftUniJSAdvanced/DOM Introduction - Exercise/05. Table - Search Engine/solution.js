function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let data = document.querySelectorAll('tbody tr');
   
   let userSearch = document.getElementById('searchField');

   function onClick() {
    
    
      for (const row of data) {
         row.classList.remove('select');
        if(userSearch.value !== '' && row.innerHTML.includes(userSearch.value)) {
         row.className = 'select';
        }
      }
      userSearch.value = '';

   }
}