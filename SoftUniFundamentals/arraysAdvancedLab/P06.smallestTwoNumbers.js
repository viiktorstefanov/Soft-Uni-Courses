function smallestTwoNumbers(arr) {
let smallestNumbers = arr.sort((a, b) => a -b)
console.log(smallestNumbers.slice(0, 2).join(" "))
}
smallestTwoNumbers([30, 15, 50, 5])