window.addEventListener('load', solve);

function solve() {
    let total = 0;
    let addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let modelElement = document.getElementById('model');
        let yearElement = document.getElementById('year');
        let descriptionElement = document.getElementById('description');
        let priceElement = document.getElementById('price');

        if(modelElement.value === "" 
        || yearElement.value === "" 
        || descriptionElement.value === "" 
        || priceElement.value === "" 
        || Number(yearElement.value) <= 0 
        || Number(priceElement.value) <= 0){
             return
        }

    
        let tbodyElement = document.getElementById('furniture-list');
    
        let newTableRow = document.createElement('tr');
        newTableRow.classList.add('info');
    
        let newTdRow = document.createElement('td');
        newTdRow.textContent = modelElement.value;
        newTableRow.appendChild(newTdRow);
        
    
        let newtdRowPrice = document.createElement('td');
        newtdRowPrice.textContent = Number(priceElement.value).toFixed(2);
        newTableRow.appendChild(newtdRowPrice);
    
        newTdRow = document.createElement('td');
        let moreBtn = document.createElement('button');
        let buyBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        newTdRow.appendChild(moreBtn);
        newTdRow.appendChild(buyBtn);
        newTableRow.appendChild(newTdRow);
    
        
        tbodyElement.appendChild(newTableRow);
    
        let newTableRowInfo = document.createElement('tr');
        newTableRowInfo.classList.add('hide');
    
        let newTdRowInfoYear = document.createElement('td');
        newTdRowInfoYear.textContent = `Year: ${yearElement.value}`
        newTableRowInfo.appendChild(newTdRowInfoYear);
    
        let newTdRowInfoDescription = document.createElement('td');
        newTdRowInfoDescription.textContent = `Description: ${descriptionElement.value}`
        newTableRowInfo.appendChild(newTdRowInfoDescription);
    
        tbodyElement.appendChild(newTableRowInfo);

        modelElement.value = '';
        yearElement.value = '';
        descriptionElement.value = '';
        priceElement.value = '';
    
        moreBtn.addEventListener('click', (e) => {
            
            if(e.currentTarget.textContent === "More Info") {
                e.currentTarget.textContent = 'Less Info';
                newTableRowInfo.style.display = 'contents';
                newTdRowInfoDescription.setAttribute('colspan', 3);
            }else {
                e.currentTarget.textContent = 'More Info';
                newTableRowInfo.style.display = 'none';
            }
           
        })
    
        buyBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.parentElement.remove();
            total += Number(newtdRowPrice.textContent);
            document.getElementsByClassName('total-price')[0].textContent = total.toFixed(2);
            newTableRowInfo.remove();
        })
    })
    }