function bombNumber(arr, commands) {
    let bombNumber = commands[0];
    let power = commands[1];
    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];
        if (currEl === bombNumber) {
            arr.splice(Math.abs(i - power), Math.abs(power + power + 1))
        }
    }
    sum = 0;
    for (const el of arr) {
        sum += el;
    }

return sum;
}
console.log(bombNumber([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
))
console.log(bombNumber([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
))
console.log(bombNumber([1, 7, 7, 1, 2, 3],
    [7, 1]
))
console.log(bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
))