window.addEventListener('load', solve);

function solve() {
   let nextStepBtnElement = document.getElementById('next-btn');
   nextStepBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let numPeopleElement = document.getElementById('people-count');
    let dateElement = document.getElementById('from-date');
    let daysElement = document.getElementById('days-count');

 

    let check = firstNameElement.value !== "" && lastNameElement.value !== "" && numPeopleElement.value !== "" && dateElement.value !== "" && daysElement.value !== "";
    if(check) {
    
    nextStepBtnElement.setAttribute('disabled', 'disabled');

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let numPeople = numPeopleElement.value;
    let date = dateElement.value;
    let days = daysElement.value;

    let ulTicketInfoElement = document.getElementsByClassName('ticket-info-list');
    
    let liTicketElement = document.createElement('li');
    liTicketElement.classList.add('ticket');
    
    let articleElement = document.createElement('article');

    let h3FullNameElement = document.createElement('h3');
    h3FullNameElement.textContent = `Name: ${firstName} ${lastName}`;
    articleElement.appendChild(h3FullNameElement);

    let pDateElement = document.createElement('p');
    date = date.split('/').join('-');
    pDateElement.textContent = `From date :${date}`;
    articleElement.appendChild(pDateElement);

    let pDaysElement = document.createElement('p');
    pDaysElement.textContent = `For ${days} days`;
    articleElement.appendChild(pDaysElement);

    let pPeopleElement = document.createElement('p');
    pPeopleElement.textContent = `For ${numPeople} people`;
    articleElement.appendChild(pPeopleElement);

    let editBtnElement = document.createElement('button');
    editBtnElement.classList.add('edit-btn');
    editBtnElement.textContent = 'Edit';

    let continueBtnElement = document.createElement('button');
    continueBtnElement.classList.add('continue-btn');
    continueBtnElement.textContent = 'Continue';

    liTicketElement.appendChild(articleElement);
    liTicketElement.appendChild(editBtnElement);
    liTicketElement.appendChild(continueBtnElement);
    
   
    ulTicketInfoElement[0].appendChild(liTicketElement);

    firstNameElement.value = "";
    lastNameElement.value = "";
    numPeopleElement.value = "";
    dateElement.value = ""; 
    daysElement.value = "";
    editBtnElement.removeAttribute('disabled', 'disabled');
    continueBtnElement.removeAttribute('disabled', 'disabled');

    editBtnElement.addEventListener('click' , (e) => {
        nextStepBtnElement.removeAttribute('disabled', 'disabled');

        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        numPeopleElement.value = numPeople;
        dateElement.value = date;
        daysElement.value = days;

        e.currentTarget.parentElement.remove();

    })

    continueBtnElement.addEventListener('click' , () => {
        let ulConfirmTicketElement = document.getElementsByClassName('confirm-ticket')[0];
        ulConfirmTicketElement.appendChild(liTicketElement);

        editBtnElement.remove();
        continueBtnElement.remove();

        //liTicketElement

        let confirmBtnElement = document.createElement('button');
        confirmBtnElement.classList.add('confirm-btn');
        confirmBtnElement.textContent = 'Confirm';

        let cancelBtnElement = document.createElement('button');
        cancelBtnElement.classList.add('cancel-btn');
        cancelBtnElement.textContent = 'Cancel';

        liTicketElement.appendChild(confirmBtnElement);
        liTicketElement.appendChild(cancelBtnElement);

        cancelBtnElement.addEventListener('click', () => {
            nextStepBtnElement.removeAttribute('disabled', 'disabled');
            liTicketElement.remove();
        })

        confirmBtnElement.addEventListener('click', () => {
            let mainElement = document.getElementById('main');
            mainElement.remove();

            let bodyElement = document.getElementById('body');

            let h1GreetingElement = document.createElement('h1');
            h1GreetingElement.textContent = 'Thank you, have a nice day! ';
            h1GreetingElement.setAttribute('id', 'thank-you');
            
            let backBtnElement = document.createElement('button');
            backBtnElement.textContent = 'Back ';
            backBtnElement.setAttribute('id', 'back-btn');


            bodyElement.appendChild(h1GreetingElement);
            bodyElement.appendChild(backBtnElement);

            backBtnElement.addEventListener('click',() => {
                location.reload();
            })
        })
    })




    }
   })
}


    
    
