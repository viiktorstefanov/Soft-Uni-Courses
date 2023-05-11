function toggle() {
    let extraText = document.getElementById('extra');
    let button = document.querySelector('.button');

    if(button.textContent === "More") {
        button.textContent = "Less";
        extraText.style.display = 'block';
    }
    else {
        button.textContent = 'More';
        extraText.style.display = 'none';
    }
}