function reverse(a,b,c) {
let result = a + b + c;
result =[...result].reverse().join(" ")
console.log(result);
}
reverse('A',
'B',
'C'
)