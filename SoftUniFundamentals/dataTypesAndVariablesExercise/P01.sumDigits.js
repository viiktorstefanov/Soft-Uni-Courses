function sumDigits(a) {
    a=a.toString();
    let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum+= Number(a[i]);
}
console.log(sum)
}
sumDigits(97561)