function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"');
    let emailsInformationElement = document.querySelectorAll('table tbody tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');
    
    let emails = Array.from(emailsInformationElement);

    let targetEmail = emails.find(x => x.textContent === inputElement.value);

    if(targetEmail) {
        targetEmail.parentElement.remove();

        resultElement.textContent = 'Deleted';

    }else {
        resultElement.textContent = 'Not found';
    }
}