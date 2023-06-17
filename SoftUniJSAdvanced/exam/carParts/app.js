window.addEventListener('load', solve);
// All fields (Car Model, Car Year, Part Name, Part Number, and Condition) are filled with the correct input
// •	Car Model, Car Year, Part Name, Part Number, and Condition are non-empty strings and Car Year must be between 1980 and 2023. If any of them is empty or invalid, the program should not do anything.

function solve() {
        let nextBtn = document.getElementById('next-btn');

        nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                let carModelElement = document.getElementById('car-model');
                let carYearElement = document.getElementById('car-year');
                let partNameElement = document.getElementById('part-name');
                let partNumberElement = document.getElementById('part-number');
                let conditionElement = document.getElementById('condition');


                //cheking empty inputs or car year between 1980-2023
                let check = carModelElement.value !== '' && partNameElement.value !== '' && partNumberElement.value !== '' && conditionElement.value !== '' && Number(carYearElement.value) >= 1980 && Number(carYearElement.value) <= 2023;

                if (check) {
                        //saved values from inputs
                        let carModel = carModelElement.value;
                        let carYear = carYearElement.value;
                        let partName = partNameElement.value;
                        let partNumber = partNumberElement.value;
                        let condition = conditionElement.value;

                        // clearing inputs
                        carModelElement.value = '';
                        carYearElement.value = '';
                        partNameElement.value = '';
                        partNumberElement.value = '';
                        conditionElement.value = '';

                        let img = document.querySelector('#complete-img');
                        let completeText = document.querySelector("#complete-text");

                        if (img.style.visibility === 'visible') {
                                img.style.visibility = 'hidden';
                                completeText.textContent = '';
                        }


                        nextBtn.setAttribute('disabled', true);

                        let ulElement = document.querySelector('#part-info .info-list');

                        let li = document.createElement('li');
                        li.classList.add('part-content');

                        let article = document.createElement('article');

                        let pCarModel = document.createElement('p');
                        pCarModel.textContent = `Car Model: ${carModel}`;
                        let pCarYear = document.createElement('p');
                        pCarYear.textContent = `Car Year: ${carYear}`;
                        let pPartName = document.createElement('p');
                        pPartName.textContent = `Part Name: ${partName}`
                        let pPartNumber = document.createElement('p');
                        pPartNumber.textContent = `Part Number: ${partNumber}`;
                        let pCondition = document.createElement('p');
                        pCondition.textContent = `Condition: ${condition}`;

                        let editBtn = document.createElement('button');
                        editBtn.textContent = 'Edit';
                        editBtn.classList.add('edit-btn');
                        let continueBtn = document.createElement('button');
                        continueBtn.textContent = 'Continue';
                        continueBtn.classList.add('continue-btn');


                        article.appendChild(pCarModel);
                        article.appendChild(pCarYear);
                        article.appendChild(pPartName);
                        article.appendChild(pPartNumber);
                        article.appendChild(pCondition);
                        li.appendChild(article);
                        li.appendChild(editBtn);
                        li.appendChild(continueBtn);
                        ulElement.appendChild(li);



                        editBtn.addEventListener('click', () => {

                                while (ulElement.firstChild) {
                                        ulElement.removeChild(ulElement.lastChild);
                                }

                                carModelElement.value = carModel
                                carYearElement.value = Number(carYear);
                                partNameElement.value = partName;
                                partNumberElement.value = partNumber;
                                conditionElement.value = condition;

                                nextBtn.removeAttribute('disabled');

                        })

                        continueBtn.addEventListener('click', () => {
                                let continueUl = document.querySelector('#confirm-order .confirm-list');
                                continueUl.appendChild(li);
                                while (ulElement.firstChild) {
                                        ulElement.removeChild(ulElement.lastChild);
                                }

                                continueBtn.remove();
                                editBtn.remove();

                                let confirmBtn = document.createElement('button');
                                confirmBtn.textContent = 'Confirm';
                                confirmBtn.classList.add('confirm-btn');



                                let cancelBtn = document.createElement('button');
                                cancelBtn.textContent = 'Cancel';
                                cancelBtn.classList.add('cancel-btn');

                                li.appendChild(confirmBtn);
                                li.appendChild(cancelBtn);

                                confirmBtn.addEventListener('click', () => {
                                        li.remove();
                                        nextBtn.removeAttribute('disabled');
                                        completeText.textContent = "Part is Ordered!";
                                        img.style.visibility = 'visible';
                                })

                                cancelBtn.addEventListener('click', () => {
                                        li.remove();
                                        nextBtn.removeAttribute('disabled');
                                })
                        })
                }
        })
};




