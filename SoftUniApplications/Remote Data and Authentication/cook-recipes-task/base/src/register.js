let formElement = document.getElementById('form');
formElement.addEventListener('submit', (e) => {
e.preventDefault();

let formData = new FormData(e.currentTarget);
let email = formData.get('email');
let password = formData.get('password');

let body = {
    email,
    password,
};

fetch('http://localhost:3030/users/register', {
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(body),
})
.then(response => response.json())
.then(user => {
    sessionStorage.setItem('authToken', user.accessToken);
    console.log(user.accessToken);
    window.location.pathname = 'index.html';

})

})