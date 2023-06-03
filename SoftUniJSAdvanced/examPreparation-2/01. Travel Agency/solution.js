window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let adressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');
  let submitBtnElement = document.getElementById('submitBTN');
  let editBtnElement = document.getElementById('editBTN');
  let continueElement = document.getElementById('continueBTN');


  submitBtnElement.addEventListener('click', () => {
    let previewListElement = document.getElementById('infoPreview');
    let check = fullNameElement.value !== "" && emailElement.value !== "";
    if(check) {
      let fullName = fullNameElement.value;
      let email = emailElement.value;
      let phone = phoneElement.value;
      let adress = adressElement.value;
      let code = codeElement.value;

      let liFullName = document.createElement('li');
      liFullName.textContent = `Full Name:${fullName}`;
      let liEmail = document.createElement('li');
      liEmail.textContent = `Email:${email}`;
      let liPhone = document.createElement('li');
      liPhone.textContent = `Phone Number:${phone}`;
      let liAddress = document.createElement('li');
      liAddress.textContent = `Address:${adress}`
      let liCode = document.createElement('li');
      liCode.textContent = `Postal Code:${code}`
      previewListElement.appendChild(liFullName);
      previewListElement.appendChild(liEmail);
      previewListElement.appendChild(liPhone);
      previewListElement.appendChild(liAddress);
      previewListElement.appendChild(liCode);
  
      fullNameElement.value = '';
      emailElement.value = '';
      phoneElement.value = '';
      adressElement.value = '';
      codeElement.value = '';
  
      
      submitBtnElement.setAttribute('disabled','disabled');
      editBtnElement.removeAttribute('disabled','disabled');
      continueElement.removeAttribute('disabled','disabled');
  
      

      editBtnElement.addEventListener('click', () => {
      fullNameElement.value = fullName;
      emailElement.value = email;
      phoneElement.value = phone;
      adressElement.value = adress;
      codeElement.value = code;
      fullName = fullNameElement.value;
      liFullName.remove();
      liEmail.remove();
      liPhone.remove();
      liAddress.remove();
      liCode.remove();


      editBtnElement.setAttribute('disabled','disabled');
      continueElement.setAttribute('disabled','disabled');
      submitBtnElement.removeAttribute('disabled','disabled');
      });

      continueElement.addEventListener('click', () => {
        
          const block = document.getElementById("block");
          while (block.firstChild) {
            block.removeChild(block.lastChild);
          }
          
         let heading = document.createElement('h3');
         heading.textContent = 'Thank you for your reservation!';
         block.appendChild(heading);
        
      })
    }
   


  })
}
