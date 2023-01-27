function reverseArray(n,array) {
let newArray = [];
for (let i = n - 1; i >=0; i--) {
    const element = array[i];
    newArray.push(element);
     
    
    
}
console.log(newArray.join(" "));

}
reverseArray(3, [10, 20, 30, 40, 50])