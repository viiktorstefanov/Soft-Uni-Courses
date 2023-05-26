function validate() {
    const firmCheck = document.getElementById('company');
    firmCheck.addEventListener('change', function () {
        document.getElementById('companyInfo').style.display = this.checked
        ? 'block'
        : 'none';
    })
    
    let submitElement = document.getElementById('submit');
    submitElement.addEventListener('click', (e) => {
    
        e.preventDefault();
        let isValid = true;
    
        let usernameElement = document.getElementById('username');
        if(!usernameElement.value.match(/^[a-zA-Z0-9]{3,20}$/)) {
            usernameElement.style.borderColor = 'red';
            isValid = false;
        }else {
            usernameElement.style.border = 'none';
        }
       
        let emailElement = document.getElementById('email');
        if(!emailElement.value.match(/.*@.*\..*/)) {
            emailElement.style.borderColor = 'red';
            isValid = false;
        }else {
            emailElement.style.border = 'none';
        }
    
        let passwordElement = document.getElementById('password');
        let confirmPasswordElement = document.getElementById('confirm-password');
        if(!passwordElement.value.match(/^[\w]{5,15}$/) 
        || passwordElement.value !== confirmPasswordElement.value) {
            
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.borderColor = 'red';
            isValid = false;
        }else {
            passwordElement.style.border = 'none';
            confirmPasswordElement.style.border = 'none';
    
        }
    
        let companyNumberElement = document.getElementById('companyNumber');
        let companyInfoElement = document.getElementById('companyInfo');
        if (document.getElementById('company').checked) {
            if(companyNumberElement.value < 1000 || companyNumberElement.value > 9999) {
                companyNumberElement.style.borderColor = 'red';
                isValid = false;
            }else {
                companyNumberElement.style.borderColor = 'none';
            }
        }
       
    
        let validElement = document.getElementById('valid'); 
        isValid ? validElement.style.display = 'block': validElement.style.display = 'none';
    })
    }