function addAndSubtract(arr) {
    let newArr = [];
    let sumOld = 0;
    let sumNew = 0;
for(let i = 0; i < arr.length; i++  ) {
    let currentNumber = arr[i];
    sumOld += currentNumber;
    if(currentNumber % 2 === 0 ) {
     currentNumber += i;
     newArr.push(currentNumber);
     sumNew += currentNumber;
    }
    else {
        currentNumber -= i;
        newArr.push(currentNumber);
        sumNew += currentNumber;
    }
}
console.log(newArr);
console.log(sumOld);
console.log(sumNew);

}
addAndSubtract([5, 15, 23, 56, 35]);