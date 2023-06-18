(function login () {
    let emailElement = document.querySelector('input[type="text"]');
    let passwordElement = document.querySelector('input[type="password"]');
    let form = document.querySelector('form');
    document.getElementById('logout').style.display = 'none';
    
    let loginBtn = document.querySelector('#login button');
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        let email = emailElement.value;
        let password = passwordElement.value;

        let user = {
            email,
            password,
        };

        
            fetch('http://localhost:3030/users/login', {
                method: "POST",
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(user),
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
    
})();
