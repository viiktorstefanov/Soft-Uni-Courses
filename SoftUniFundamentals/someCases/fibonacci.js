function fibonacci (n) {
const arr = [0, 1];
let a, b
for( let i = 2; i < n; i++) {
    
    a = arr[i-1];
    b = arr[i-2];
    arr.push(a+b);
}
return arr;
}

console.log(fibonacci (7))