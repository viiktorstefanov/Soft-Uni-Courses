function validate() {
    const field = document.getElementById('email');
  
    field.addEventListener('change', (e) => {
      if (validateEmail(field.value)) {
        e.target.classList.remove('error');
      } else {
        e.target.classList.add('error');
      }
    });
  
    function validateEmail(email) {
        let pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      if (pattern.test(email)) {
        return true;
      }
  
      return false;
    }
  }