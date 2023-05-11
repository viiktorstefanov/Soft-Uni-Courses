function colorize() {
let rowElements = document.querySelectorAll('tr:nth-of-type(even) td');
rowElements.forEach( x => x.style.backgroundColor = 'teal');
}

// function colorize() {
//     const evenRows = document.querySelectorAll('table tr:nth-child(even)');
  
//     for (const row of Array.from(evenRows)) {
//       row.style.backgroundColor = 'teal';
//     }
//   }