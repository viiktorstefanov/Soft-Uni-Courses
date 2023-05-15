function solve() {
const areaElement = document.getElementsByTagName('textarea')[0];

let cart = {};

Array.from(document.getElementsByClassName('add-product'))
.forEach((button) => button.addEventListener('click', (e) => {
   let product = e.target.parentElement.parentElement;
   let name = product.querySelector('.product-details .product-title').textContent;
   let price = Number(product.querySelector('.product-line-price').textContent).toFixed(2);
   
   if(!cart.hasOwnProperty(name)) {
      cart[name] = {
         price: price,
         quantity : 0,
      };
   }

   cart[name].quantity++;
   //Added {name} for {money} to the cart.\n". 
   areaElement.textContent += `Added ${name} for ${price} to the cart. \n`;
}
));
const checkoutElement = document.getElementsByClassName('checkout')[0];
checkoutElement.addEventListener('click', () => {
   const products = Object.keys(cart).join(', ');
   const total = Object.values(cart).reduce((acc, curr) => 
      acc + curr.price * curr.quantity,0
   );

   areaElement.textContent += `You bought ${products} for ${total}.`;

   Array.from(document.getElementsByTagName('button')).forEach(x => x.disabled = true)
})
}