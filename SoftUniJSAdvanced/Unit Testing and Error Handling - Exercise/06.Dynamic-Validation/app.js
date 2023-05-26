function validate() {
 let inputElement = document.getElementById('email'); 
 inputElement.addEventListener('change', validateEmail );
function validateEmail () {
    let pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm);
    let checkEmail = pattern.test(inputElement.value);

    if(!checkEmail) {
        inputElement.classList.add('error');
     }else {
        inputElement.classList.remove('error');
     }
}
}