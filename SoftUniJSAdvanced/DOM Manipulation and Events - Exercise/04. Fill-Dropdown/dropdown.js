function addItem() {
    let resultOptionElement = document.getElementById('menu');
    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');

        let newOptionElement = document.createElement('option');
        newOptionElement.textContent = inputTextElement.value;
        newOptionElement.value = inputValueElement.value;
        resultOptionElement.appendChild(newOptionElement);
        inputTextElement.value = "";
        inputValueElement.value = "";
}
