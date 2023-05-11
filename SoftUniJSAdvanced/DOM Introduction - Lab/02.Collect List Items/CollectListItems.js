function extractText() {
    let items = document.getElementById(`items`);
    let text = document.getElementById('result');
    text.textContent = items.textContent;
}