let formElement = document.getElementById('form');
let loadBooksElement = document.getElementById('loadBooks');
let submitBtn = document.getElementById('form-submit-save').textContent;
let headForm = document.getElementById('form-head').textContent;

//remove old books from html static added
let oldBooks = document.querySelectorAll('table tbody tr');
oldBooks.forEach(tr => tr.remove());

loadBooksElement.addEventListener('click', loadBooks);
if(submitBtn == 'Submit' && headForm == 'FORM') {
    formElement.addEventListener('submit', addBookHandler);
}


function addBookHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let title = formData.get('title');
    let author = formData.get('author');
    let formTitleElement = document.querySelector('input[name="title"]');
    let formAuthorElement = document.querySelector('input[name="author"]');

    let book = {
        author,
        title,
    }

    fetch('http://localhost:3030/jsonstore/collections/books', {
        method: "post",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(book),
    })

    formTitleElement.value = "";
    formAuthorElement.value = "";

}

function loadBooks(e) {
    let table = e.target.nextElementSibling;
    let tbody = table.querySelector('tbody');

    //clear old loaded
    let oldBooks = document.querySelectorAll('table tbody tr');
    oldBooks.forEach(tr => tr.remove());

    fetch('http://localhost:3030/jsonstore/collections/books')
        .then(response => response.json())
        .then(data => {
                Object.entries(data).forEach(bookInfo => {
                let key = bookInfo[0];
                let currBook = bookInfo[1];


                let tr = document.createElement('tr');
                tr.setAttribute('key', key);
                let titleTd = document.createElement('td');
                titleTd.textContent = currBook.title;
                let authorTd = document.createElement('td');
                authorTd.textContent = currBook.author;
                let buttonsTd = document.createElement('td');
                let editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                buttonsTd.appendChild(editBtn);
                buttonsTd.appendChild(deleteBtn);

                tr.appendChild(titleTd);
                tr.appendChild(authorTd);
                tr.appendChild(buttonsTd);

                tbody.appendChild(tr);

                editBtn.addEventListener('click', (e) => {
                    //edit head and submit btn
                    let formHead = document.getElementById('form-head');
                    let formSubmitSave = document.getElementById('form-submit-save');
                    formHead.textContent = 'Edit FORM';
                    formSubmitSave.textContent = 'Save';

                    let currTr = e.currentTarget.parentElement.parentElement;
                    let currBookAuthor = e.currentTarget.parentElement.previousElementSibling.textContent;
                    let currBookTitle = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.textContent;

                    let formTitleElement = document.querySelector('input[name="title"]');
                    let formAuthorElement = document.querySelector('input[name="author"]');

                    formTitleElement.value = currBookTitle;
                    formAuthorElement.value = currBookAuthor;

                    let id = currTr.getAttribute('key');

                    
                   

                    let saveBtn = document.getElementById('form-submit-save');

                    saveBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        let replace = {
                            author: formAuthorElement.value,
                            title: formTitleElement.value
                        }
                        
    
                        fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(replace)
                        })

                        //clear inputs 
                        formTitleElement.value = "";
                        formAuthorElement.value = "";

                        // edit back to normal
                        let formHead = document.getElementById('form-head');
                        let formSubmitSave = document.getElementById('form-submit-save');
                        formHead.textContent = 'FORM';
                        formSubmitSave.textContent = 'Submit';
                    })
                })

                deleteBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    let currLine = e.currentTarget.parentElement.parentElement;
                    let id = currLine.getAttribute('key');
                    

                    fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json',
                        },
                        
                    })

                    //remove line
                    currLine.remove();
                })
            });
        })
}