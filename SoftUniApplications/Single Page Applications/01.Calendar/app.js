

let mainYears = document.getElementById('years');
let sections = document.querySelectorAll('body>section');

showMainCalendar();

function showMainCalendar () {
    sections.forEach((section, index) => {
        if(index !== 0) {
            section.style.display = 'none';
        }
    });
}



mainYears.addEventListener('click', (e) => {
    let currYear = (e.target.textContent).trim();
    
    

})