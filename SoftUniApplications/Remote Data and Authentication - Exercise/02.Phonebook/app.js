function attachEvents() {
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');
    loadBtn.addEventListener('click', loadHandler);
    createBtn.addEventListener('click', createHandler);

    function loadHandler() {

        //clear old loads
        let oldLoadContacts = document.querySelectorAll('#phonebook li');
        oldLoadContacts.forEach(contact => contact.remove());

        fetch('http://localhost:3030/jsonstore/phonebook')
        .then(response => response.json())
        .then(data => {
            let info = Object.entries(data);
            let ulElement = document.getElementById('phonebook');
            info.forEach(x => {
                let key = x[0];
                let personInfo = x[1];
                let name = personInfo.person;
                let phone = personInfo.phone;
                let li = document.createElement('li');
                li.textContent = `${name}: ${phone}`;
                li.setAttribute('key',key);
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                li.appendChild(deleteBtn);
                ulElement.appendChild(li);
                deleteBtn.addEventListener('click', (e) => {
                    let currLiElement = e.currentTarget.parentElement;
                    let currId = e.target.parentElement.getAttribute('key');
                    
                    fetch(`http://localhost:3030/jsonstore/phonebook/${currId}`, {
                        method: 'DELETE',
                    })
                    .then(response => {
                        if(response.status == 200) {
                            currLiElement.remove();
                        }
                    })
                    .catch(err => console.log(err.message));
                })
            })
        })
        .catch(err => console.log(err.message));
    }

    function createHandler() {

        let createPersonName = document.getElementById('person').value;
        let createPersonPhone = document.getElementById('phone').value;
        
        let data = {
            person: createPersonName,
            phone: createPersonPhone,
        }

        fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(data),
        })
        .then(response => {
            //clear create inputs
            document.getElementById('person').value = '';
            document.getElementById('phone').value = '';
        })
        .catch(error => console.log(error.message))
    }
}

attachEvents();