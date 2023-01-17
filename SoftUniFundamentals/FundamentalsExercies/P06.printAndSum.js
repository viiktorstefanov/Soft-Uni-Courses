function print(a, b) {
    let sum = 0;
    var numbers = "";
for(var i= a; i<=b ; i++) {
   
   numbers += i + " ";
  
    sum+=i;
}
console.log(numbers)
console.log(`Sum: ${sum}`)
}
print(5, 10)