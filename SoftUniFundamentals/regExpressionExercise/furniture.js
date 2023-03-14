function furniture(input) {
let text = input.shift();
let pattern = /[>>]{2}(?<furniture>[A-Za-z]+)[<<]{2}(?<price>\d+[\.]*\d+)!(?<quantity>[\d]+)/gm
let total = 0;
console.log('Bought furniture:');
while(text!== 'Purchase') {



    let matches = text.matchAll(pattern);
    for(let match of matches) {
       
        console.log(match.groups.furniture);
        
        total += match.groups.price * match.groups.quantity;
       
    
}
text = input.shift();




}
console.log(`Total money spend: ${total.toFixed(2)}`)
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

)