(function register() {
document.getElementById('logout').style.display = 'none';
let form = document.querySelector('#register-view #register');

form.addEventListener('submit', (e) => {
e.preventDefault();

let formData = new FormData(e.target)
let email = formData.get('email');
let password = formData.get('password');
let rePass = formData.get('rePass');

if(email === "" || password === "" || rePass === "") {
    throw new Error(`Invalid input`);
}

if(password !== rePass) {
    throw new Error(`Passwords do NOT match`);
}

let newUser = {
    email,
    password,
    rePass,
};

fetch('http://localhost:3030/users/register', {
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify(newUser),
})
.then(response => {
    if(response.status !== 200) {
        throw new Error(response.message)
    }
    return response.json();

})
.then(data => {
    let token = data.accessToken;
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(data));
    window.location.pathname = 'src/index.html';
    
}).catch(error => {
        form.reset();
        alert(error.message)
}) 

})
})()