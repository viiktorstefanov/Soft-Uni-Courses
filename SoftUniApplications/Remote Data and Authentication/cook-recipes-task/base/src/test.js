let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
e.preventDefault();

let formData = new FormData(e.currentTarget);

let nameRecipe = formData.get('name');
let imageUrl = formData.get('img');
let ingredients = formData.get('ingredients');
let preparation = formData.get('steps');

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
    // console.log(data);
    window.location.pathname = 'index.html';
})
})