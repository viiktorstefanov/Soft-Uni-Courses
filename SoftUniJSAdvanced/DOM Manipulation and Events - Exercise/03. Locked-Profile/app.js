function lockedProfile() {
   Array.from(document.querySelectorAll('.profile button')).forEach((button) => {
    button.addEventListener('click', (e) => {
        const parentTarget = e.target.parentElement;
        const unlockCheck = parentTarget.querySelector('input[value="unlock"]');
        if(unlockCheck.checked) {
            const showInfoElement = parentTarget.querySelector('div');
            showInfoElement.style.display === "block" ? 
                (showInfoElement.style.display = "none",
                button.textContent = "Show more") :
                (showInfoElement.style.display = "block",
                button.textContent = "Hide it");
        }
    })
   })   
}