let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
e.preventDefault();

let formData = new FormData(e.currentTarget);

let nameRecipe = formData.get('name');
let imageUrl = formData.get('img');
let ingredients = formData.get('ingredients').split('\n').map(l => l.trim()).filter(l => l !== '').join(' ');
let preparation = formData.get('steps').split('\n').map(l => l.trim()).filter(l => l !== '');
console.log(formData.get('ingredients').split('\n').map(l => l.trim()).filter(l => l !== ''));
let body = {
    name: nameRecipe,
    img: imageUrl,
    ingredients,
    steps: preparation,
}

fetch('http://localhost:3030/jsonstore/cookbook/recipes',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'X-Authorization' : sessionStorage.authToken
    },
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data=> {
     
      window.location.pathname = 'index.html';
})
})