function addItem() {
   let inputElement = document.getElementById('newItemText');
   let itemsUlElement = document.getElementById('items');
  
   let newLiElement = document.createElement('li');
   newLiElement.textContent = inputElement.value;
   itemsUlElement.appendChild(newLiElement);
}