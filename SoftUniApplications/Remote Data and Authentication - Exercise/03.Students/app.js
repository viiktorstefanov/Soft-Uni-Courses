let formElement = document.getElementById('form');

formElement.addEventListener('submit', formInputsHandler);

function formInputsHandler(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');

    let data = {
        firstName,
        lastName,
        facultyNumber,
        grade,
    }

    fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(data),
    })
    
    
    //clear inputs 
    let inputs = document.querySelectorAll('input').forEach(x => x.value = '');
    
    loadStudents();
}

function loadStudents () {
    fetch('http://localhost:3030/jsonstore/collections/students')
    .then(response => response.json())
    .then(data => {
        let info = Object.values(data);
        let tbody = document.querySelector('#results tbody');

         //clear old students show
         let allStudents = document.querySelectorAll('#results tbody tr').forEach(tr => tr.remove());
        
        info.forEach(student => {
            let tr = document.createElement('tr');
            let fNameTd = document.createElement('td');
            fNameTd.textContent = student.firstName;
            let lNameTd = document.createElement('td');
            lNameTd.textContent = student.lastName;
            let fNumberTd = document.createElement('td');
            fNumberTd.textContent = student.facultyNumber;
            let gradeTd = document.createElement('td');
            gradeTd.textContent = student.grade;
    
            tr.appendChild(fNameTd)
            tr.appendChild(lNameTd)
            tr.appendChild(fNumberTd)
            tr.appendChild(gradeTd)
    
            tbody.appendChild(tr);
        });
        
       
        
    })
}


