function distinctArray (arr) {
numberArr = [];
for(let i = 0; i < arr.length; i++) {
    currentEl = arr[i];
    if(!numberArr.includes(currentEl)) {
numberArr.push(currentEl)
    }
}
console.log(numberArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])