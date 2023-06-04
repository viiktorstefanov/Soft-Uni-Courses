function solve() {
    let budget = 0;

    let fnameElement = document.getElementById('fname');
    let lnameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    let hireBTNElement = document.getElementById('add-worker');

    hireBTNElement.addEventListener('click', (e) => {
        e.preventDefault();

        let checkEmptyInputs = fnameElement.value !== "" && lnameElement.value !== "" && emailElement.value !== "" && birthElement.value !== "" && positionElement.value !== "" && salaryElement.value !== "";

        if (checkEmptyInputs) {
            //tr -> td *7  in last td -> buttons fired  & edit  
            let fname = fnameElement.value;
            let lname = lnameElement.value;
            let email = emailElement.value;
            let birth = birthElement.value;
            let position = positionElement.value;
            let salary = salaryElement.value;

            let trElementTable = document.createElement('tr');
            let tbodyElement = document.getElementById('tbody');

            let tdFnameElement = document.createElement('td');
            tdFnameElement.textContent = fname;
            let tdLnameElement = document.createElement('td');
            tdLnameElement.textContent = lname;
            let tdEmailElement = document.createElement('td');
            tdEmailElement.textContent = email;
            let tdBirthElement = document.createElement('td');
            tdBirthElement.textContent = birth;
            let tdPositionElement = document.createElement('td');
            tdPositionElement.textContent = position;
            let tdSalaryElement = document.createElement('td');
            tdSalaryElement.textContent = salary;

            let tdButtonsElement = document.createElement('td');
            let firedBtnElement = document.createElement('button');
            firedBtnElement.textContent = 'Fired';
            firedBtnElement.classList.add('fired');
            let EditBtnElement = document.createElement('button');
            EditBtnElement.textContent = 'Edit';
            EditBtnElement.classList.add('edit');
            tdButtonsElement.appendChild(firedBtnElement);
            tdButtonsElement.appendChild(EditBtnElement);

            trElementTable.appendChild(tdFnameElement);
            trElementTable.appendChild(tdLnameElement);
            trElementTable.appendChild(tdEmailElement);
            trElementTable.appendChild(tdBirthElement);
            trElementTable.appendChild(tdPositionElement);
            trElementTable.appendChild(tdSalaryElement);
            trElementTable.appendChild(tdButtonsElement);

            tbodyElement.appendChild(trElementTable);

            fnameElement.value = "";
            lnameElement.value = "";
            emailElement.value = "";
            birthElement.value = "";
            positionElement.value = "";
            salaryElement.value = "";

            budget += Number(salary);
            let budgetElement = document.getElementById('sum');
            budgetElement.textContent = `${budget.toFixed(2)}`;

            EditBtnElement.addEventListener('click', (e) => {
                fnameElement.value = tdFnameElement.textContent;
                lnameElement.value = tdLnameElement.textContent;
                emailElement.value = tdEmailElement.textContent;
                birthElement.value = tdBirthElement.textContent;
                positionElement.value = tdPositionElement.textContent;
                salaryElement.value = tdSalaryElement.textContent;

                budget -= Number(salaryElement.value);
                budgetElement.textContent = `${budget.toFixed(2)}`;

                e.currentTarget.parentElement.parentElement.remove();
            })

            firedBtnElement.addEventListener('click', (e) => {
                budget -= Number(tdSalaryElement.textContent);
                budgetElement.textContent = `${budget.toFixed(2)}`;

                e.currentTarget.parentElement.parentElement.remove();
            })
        }

    })
}
solve()