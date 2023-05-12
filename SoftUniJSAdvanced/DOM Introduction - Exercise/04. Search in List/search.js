function search() {
   let searched = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');
   let townsArr = Array.from(towns);
   let matches = 0;
   let result = document.getElementById('result');
  for (const town of townsArr) {
   if(town.textContent.includes(searched)) {
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
      matches++;
      
   }else {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   }
   result.textContent = `${matches} matches found`
  }
}
