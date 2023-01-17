function sum(n) {
    let sum = 0;
for(i=1; i<=n * 2 ; i+=2) {
    if(i % 2 === 1) {
        console.log(i);
    }
    
    sum+=i;
}
console.log(`Sum: ${sum}`)
}
sum(5)