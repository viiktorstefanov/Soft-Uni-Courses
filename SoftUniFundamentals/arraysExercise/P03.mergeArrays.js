function mergeArrays(arr1, arr2) {
    let newArr = [];
    let currentNum1;
    let currentNum2;
    let sumOfCurrentNumbers = 0;
for(let i = 0; i < arr1.length; i++) {
    currentNum1 = arr1[i];
    currentNum2 = arr2[i];
    if(i % 2 === 0) {
            currentNum1 = Number(currentNum1) 
            currentNum2 = Number(currentNum2);
        }
        let sumOfCurrentNumbers = currentNum1 + currentNum2;
        newArr.push(sumOfCurrentNumbers);
        
    }

console.log(newArr.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)